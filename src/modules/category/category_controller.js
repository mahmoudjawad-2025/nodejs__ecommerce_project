import CategoryModel from "../../../db/models/category_model.js"
import slugify from 'slugify';
import GlobalError from "../../utils/global_error.js";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  create

export const create = async (req, res, next) => {
    const { name } = req.body;
    req.body.slug = slugify(name) // some-string
    req.body.createdBy = req.id;
    req.body.updatedBy = req.id;

    const category = await CategoryModel.create(req.body);
    return res.status(201).json({ message: "success", category });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getAll

export const getAll = async (req, res, next) => {
    const categories = await CategoryModel.find({});

    return res.status(200).json({ message: "success", categories });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getActive

export const getActive = async (req, res, next) => {
    const categories = await CategoryModel.find({ status: 'active' });

    return res.status(200).json({ message: "success", categories });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getDetails

export const getDetails = async (req, res, next) => {
    const { id } = req.params;
    const category = await CategoryModel.findById(id);

    if (!category) {
        return res.status(404).json({ message: "category not found" });
    }

    return res.status(200).json({ message: "success", category });
};

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  remove

export const remove = async (req, res, next) => {
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndDelete(id);

    if (!category) {
        return next(new GlobalError("category not found", 404));
    }

    return res.status(200).json({ message: "success" });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  update

export const update = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    const userId = req.id;
    const category = await CategoryModel.findById(id);

    if (!category) {
        return next(new GlobalError("category not found", 404));
    }

    category.name = name;
    category.updatedBy = userId;
    category.slug = slugify(name);
    category.status = req.body.status;
    await category.save();

    return res.status(200).json({ message: "success" });
}
