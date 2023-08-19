const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator");

const validateCreateCharacter = [
    check("image").exists().notEmpty().isString(),
    check("name").exists().notEmpty().isString(),
    check("age").exists().notEmpty().isString(),
    check("weight").exists().notEmpty().isString(),
    check("history").exists().notEmpty().isString(),
];

const validateUpadteCharacter = [
    check("image").exists().notEmpty().isString(),
    check("name").exists().notEmpty().isString(),
    check("age").exists().notEmpty().isString(),
    check("weight").exists().notEmpty().isString(),
    check("history").exists().notEmpty().isString(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
];

module.exports = {
    validateCreateCharacter,
    validateUpadteCharacter
}