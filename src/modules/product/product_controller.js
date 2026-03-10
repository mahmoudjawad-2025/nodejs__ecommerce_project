import ProductModel from "../../../db/models/product_model.js"
import CategoryModel from "../../../db/models/category_model.js"
import slugify from 'slugify';
import cloudinary from '../../utils/upload_service.js';
import GlobalError from "../../utils/global_error.js";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  create

export const create = async (req, res, next) => {
    const { name, categoryId, price, discount, stock } = req.body;
    req.body.stock = stock || 1;

    const checkCategory = await CategoryModel.findById(categoryId);
    if (!checkCategory) {
        return next(new GlobalError("category not found", 404));
    }

    req.body.slug = slugify(name);

    const { secure_url, public_id } = await cloudinary.uploader.upload(
        req.files.mainImage[0].path,
        { folder: `${process.env.project_title || 'ecommerce'}/products/${name}` }
    );

    req.body.subImages = [];

    if (req.files.subImages) {
        for (const file of req.files.subImages) {
            const { secure_url, public_id } = await cloudinary.uploader.upload(file.path, {
                folder: `${process.env.project_title || 'ecommerce'}/products/${name}/subImages`
            });
            req.body.subImages.push({ secure_url, public_id });
        }
    }

    req.body.mainImage = { secure_url, public_id };
    req.body.createdBy = req.id;
    req.body.updatedBy = req.id;
    req.body.priceAfterDiscount = price - (price * (discount || 0) / 100);

    const product = await ProductModel.create(req.body);

    return res.status(201).json({ message: "success", product });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getAll

export const getAll = async (req, res) => {
    const products = await ProductModel.find({}).select('name mainImage price discount');
    return res.status(200).json({ message: "success", products });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getActive

export const getActive = async (req, res) => {
    const products = await ProductModel.find({ status: 'active' }).select('name mainImage price discount');
    return res.status(200).json({ message: "success", products });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  getDetails

export const getDetails = async (req, res, next) => {
    const { id } = req.params;
    const product = await ProductModel.findById(id).select('-discount').populate("reviews");

    if (!product) {
        return next(new GlobalError("product not found", 404));
    }

    return res.status(200).json({ message: "success", product });
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  remove 

export const remove = async (req, res, next) => {
    const { id } = req.params;

    const product = await ProductModel.findById(id);

    if (!product) {
        return next(new GlobalError("product not found", 404));
    }

    const folderPath = `${process.env.project_title || 'ecommerce'}/products/${product.name}`;

    try {
        await cloudinary.api.delete_resources_by_prefix(folderPath);

        await cloudinary.api.delete_folder(`${folderPath}/subImages`);
        await cloudinary.api.delete_folder(folderPath);

        await ProductModel.findByIdAndDelete(id);

        return res.status(200).json({ message: "success" });

    } catch (error) {
        console.error("Cleanup failed:", error);
        return next(new GlobalError(`Error during Cloudinary cleanup: ${error.message}`, 500));
    }
}
