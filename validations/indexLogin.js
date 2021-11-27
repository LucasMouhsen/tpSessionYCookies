const { check } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('Ingrese nombre'),

    check('email')
    .notEmpty().withMessage('Ingrese email'),
    
    check('age')
    .notEmpty().withMessage('Ingrese edad')
    .isInt().withMessage('Ingrese una edad valida'),

    check('color')
    .notEmpty().withMessage('Ingrese color')
]