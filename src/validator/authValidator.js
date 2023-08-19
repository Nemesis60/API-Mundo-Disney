const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator");

const validateCreateUser = [
    check("username").exists().notEmpty().isString(),
    check("email").exists().notEmpty().isString(),
    check("password").exists().notEmpty().isString(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
];
const validateLoginUser = [
    check("username").exists().notEmpty().isString(),
    check("email").exists().notEmpty().isString(),
    check("password").exists().notEmpty().isString(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
];

const validateUpdateUser = [
    check("username").exists().notEmpty().isString(),
    check("email").exists().notEmpty().isString().isEmail(),
    check("password").exists().notEmpty().isString(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
];

module.exports = {
    validateCreateUser,
    validateLoginUser,
    validateUpdateUser
}