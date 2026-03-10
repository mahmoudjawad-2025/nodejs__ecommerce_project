import GlobalError from "../utils/global_error.js";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  validation

const validation = (schema) => {
    return (req, res, next) => {

        // internal comment: validate body and params
        const inputData = { ...req.body, ...req.params };
        const validateResult = schema.validate(inputData, { abortEarly: false });

        if (validateResult?.error) {
            return next(new GlobalError(validateResult.error, 400));
        }

        next();
    };
};

export default validation;