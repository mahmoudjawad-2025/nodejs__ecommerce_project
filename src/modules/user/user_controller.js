import UserModel from "../../../db/models/user_model.js";
import GlobalError from "../../utils/global_error.js";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Get User

export const getUser_findOne = async (req, res, next) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
        return next(new GlobalError("user not found", 404));
    }

    return res.status(200).json({ message: "success", user });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getAll_find

export const getAll_find = async (req, res, next) => {
    const users = await UserModel.find();

    return res.status(200).json({ message: "success", users });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getAll_findByConfirmEmail

export const getAll_findByConfirmEmail = async (req, res, next) => {
    const users = await UserModel.find({ confirmEmail: false });

    return res.status(200).json({ message: "success", users });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getUser_findById

export const getUser_findById = async (req, res, next) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
        return next(new GlobalError("user not found", 404));
    }

    return res.status(200).json({ message: "success", user });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Delete User

export const deleteUser = async (req, res, next) => {
    const { id } = req.params;

    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
        return next(new GlobalError("user not found", 404));
    }

    return res.status(200).json({ message: "success" });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  deleteUser_findByIdAndDelete

export const deleteUser_findByIdAndDelete = async (req, res, next) => {
    const { id } = req.params;

    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
        return next(new GlobalError("user not found", 404));
    }

    return res.status(200).json({ message: "success" });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  deleteUser_findOneAndDelete

export const deleteUser_findOneAndDelete = async (req, res, next) => {
    const { id } = req.params;

    const user = await UserModel.findOneAndDelete({ _id: id });

    if (!user) {
        return next(new GlobalError("user not found", 404));
    }

    return res.status(200).json({ message: "success" });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  updateUser

export const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { email, userName } = req.body;

    const user = await UserModel.updateOne({ _id: id }, { email: email, userName: userName });

    if (user.matchedCount === 0) {
        return next(new GlobalError("user not found", 404));
    }

    if (user.modifiedCount === 0) {
        return next(new GlobalError("no changes made", 400));
    }

    return res.status(200).json({ message: "success" });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  updateUser_updateMany

export const updateUser_updateMany = async (req, res, next) => {
    const { id } = req.params;
    const { email, userName } = req.body;

    const user = await UserModel.updateMany({ confirmEmail: false }, { confirmEmail: true });

    if (user.matchedCount == 0) {
        return next(new GlobalError("user not found", 404));
    }

    if (user.modifiedCount == 0) {
        return next(new GlobalError("no changes made", 400));
    }

    return res.status(200).json({ message: "success" });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  updateUser_findByIdAndUpdate

export const updateUser_findByIdAndUpdate = async (req, res, next) => {
    const { id } = req.params;
    const { email, userName } = req.body;

    const user = await UserModel.findByIdAndUpdate(id, { email, userName }, { new: true });

    if (!user) {
        return next(new GlobalError("user not found", 404));
    }

    return res.status(200).json({ message: "success", user });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  updateUser_findOneAndUpdate

export const updateUser_findOneAndUpdate = async (req, res, next) => {
    const { id } = req.params;
    const { email, userName } = req.body;

    const user = await UserModel.findOneAndUpdate({ _id: id }, { email, userName }, { new: true });

    if (!user) {
        return next(new GlobalError("user not found", 404));
    }

    return res.status(200).json({ message: "success", user });
}
