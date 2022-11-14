const { body, param, validationResult } = require('express-validator');

const createUserValidate = [
    body('name')
        .not()
        .isEmpty(),
    body('email')
        .not(),
    body('city')
        .not()
        .isEmpty(),
    (req, res, next) => {
        handleErrorValidate(req, res, next);
    }
]

const idParamValidate = [
    param('id')
        .isInt()
        .toInt()
]

const editUserValidate = [
    ...idParamValidate,
    ...createUserValidate
]

const handleErrorValidate = (req, res,next) => {
    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.mapped()})
        }
        next()
}

module.exports = {
    createUserValidate,
    editUserValidate
}