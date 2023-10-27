const Joi = require("joi");

const addUsersSchema = Joi.object().keys({
  email: Joi.string().email().lowercase().required(),
  first_name: Joi.string().min(2).required(),
  last_name: Joi.string().min(2).required(),
  age: Joi.number().required(),
  gender: Joi.string().required(),
  phone_number: Joi.string().required(),
});

const updateUsersSchema = Joi.object().keys({
  email: Joi.string().email().lowercase(),
  first_name: Joi.string().min(2),
  last_name: Joi.string().min(2),
  age: Joi.number(),
  gender: Joi.string(),
  phone_number: Joi.string(),
});





module.exports = { addUsersSchema, updateUsersSchema };
