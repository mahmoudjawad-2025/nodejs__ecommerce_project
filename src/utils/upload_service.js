import multer from 'multer';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  usage example
// import fileupload, { fileValidation } from './../utils/muliter.js';
// . . .
// router.get('/', auth(['admin']), fileUpload(fileValidation.image), controller.get);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  file validation

export const fileValidation = {
    image: ['image/png', 'image/jpeg', 'image/webp'],
    pdf: ['application/pdf'],
    excel: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  multer

function fileUpload(customValidation = []) {
    const storage = multer.diskStorage({});

    function fileFilter(req, file, cb) {
        if (customValidation.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb("invalid format", false);
        }
    }

    const upload = multer({ fileFilter, storage });
    return upload;
}

export { fileUpload };




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  cloudinary

import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});

export default cloudinary;


