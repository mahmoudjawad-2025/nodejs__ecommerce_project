import jwt from 'jsonwebtoken';
import UserModel from '../../db/models/user_model.js';

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  auth

export const auth = (accessRoles = []) => {
    return async (req, res, next) => {
        const { token } = req.headers;

        if (!token) {
            return res.status(400).json({ message: "invalid auth" });
        }

        const decoded = jwt.verify(token, process.env.LOGIN_SECRET || 'login_secret');

        const user = await UserModel.findById(decoded.id);

        if (!accessRoles.includes(user.role)) {
            return res.status(400).json({ message: "not auth user" });
        }

        req.id = decoded.id;
        next();
    }
}