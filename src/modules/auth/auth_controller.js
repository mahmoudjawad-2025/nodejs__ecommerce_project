import bcrypt from 'bcrypt';
import userModel from '../../../db/models/user_model.js';
import jwt from 'jsonwebtoken';
import GlobalError from '../../utils/global_error.js';
import { sendEmail } from '../../utils/email_service.js';
import { customAlphabet } from 'nanoid';

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Register

export const register = async (req, res, next) => {
    const { email, password, name } = req.body;
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
        return next(new GlobalError("Email already exists", 400));
    }

    // Hash the password and create user
    const hash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS) || 8);
    const user = await userModel.create({ userName: name, email, password: hash });

    // confirm email
    const token = jwt.sign({ email }, process.env.CONFIRMEMAIL_SECRET || 'confirm_secret');
    const html = `
    <div>
        <h1>Welcome ${name}</h1>
        <h2>Confirm Email </h2>
        <a href="${req.protocol}://${req.headers.host}/auth/confirmEmail/${token}">confirm your email</a>
    </div>
    `;
    await sendEmail(email, "confirm email", html);

    return res.json({ message: "success", user });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  confirmEmail

export const confirmEmail = async (req, res, next) => {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.CONFIRMEMAIL_SECRET || 'confirm_secret');
    await userModel.findOneAndUpdate({ email: decoded.email }, { confirmEmail: true });
    return res.status(200).json({ message: "success" });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Login

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
        return next(new GlobalError("invalid data", 400));
    }

    if (!user.confirmEmail) {
        return next(new GlobalError("plz confirm your email", 400));
    }

    if (user.status == 'not_active') {
        return next(new GlobalError("your account is blocked", 400));
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return next(new GlobalError("invalid data", 400));
    }

    const token = jwt.sign({
        id: user._id, username: user.userName,
        role: user.role
    }, process.env.LOGIN_SECRET || 'login_secret');

    return res.status(200).json({ message: "success", token });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  sendCode

export const sendCode = async (req, res, next) => {
    const { email } = req.body;
    const code = customAlphabet('1234567890abcdefABCDEF', 4)();

    const user = await userModel.findOneAndUpdate({ email }, { sendCode: code });
    const html = `<h2>code is ${code}</h2>`;
    await sendEmail(email, 'reset password', html);

    return res.status(200).json({ message: "success" });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  resetPassword

export const resetPassword = async (req, res, next) => {
    const { code, email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return next(new GlobalError("not register account", 400));
    }

    if (user.sendCode != code) {
        return next(new GlobalError("invalid code", 400));
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS) || 8);

    user.password = hashedPassword;
    user.sendCode = null;

    await user.save();

    return res.status(200).json({ message: "success" });
}

