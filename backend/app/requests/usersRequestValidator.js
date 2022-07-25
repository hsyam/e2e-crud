/**
 * Request Validation
 */
const {check, validationResult} = require('express-validator');

exports.usersRequestValidator = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .bail(),
  
  check('password')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .bail(),
    
    check('email')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .bail().normalizeEmail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
  
];
