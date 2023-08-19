const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator");

const validateCreateMovie_Serie = [
    check("image").exists().notEmpty().isString(),
    check("title").exists().notEmpty().isString,
    check("dateCreation").exists().notEmpty().isString(),
    check("rate").exists().notEmpty(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
];

const validateUpdateMovie_Serie = [
    check("image").exists().notEmpty().isString(),
    check("title").exists().notEmpty().isString,
    check("dateCreation").exists().notEmpty().isString(),
    check("rate").exists().notEmpty(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
];

module.exports = {
    validateCreateMovie_Serie,
    validateUpdateMovie_Serie
}