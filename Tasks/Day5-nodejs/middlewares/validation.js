const Joi = require("joi");

function validateUser(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    birthyear: Joi.number().required(),
    phoneNumber: Joi.string().required(),
    isAdmin: Joi.boolean().optional(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    const errorMessage = `Validation error: ${error.details[0].message}`;
    return res.status(400).send(errorMessage);
  }

  next();
}

module.exports = { validateUser };
