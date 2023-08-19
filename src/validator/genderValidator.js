const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator");

const validateCreateGender = [
    check("name").exists().notEmpty().isString(),
    check("image").exists().notEmpty().isString(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
];

const validateUpdateGender = [
    check("name").exists().notEmpty().isString(),
    check("image").exists().notEmpty().isString(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
];

module.exports = {
    validateCreateGender,
    validateUpdateGender
}