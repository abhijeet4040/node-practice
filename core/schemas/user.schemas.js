const joi = require( 'joi' );

const createUserSchema = joi.object({
    User_id : joi.number().integer(),
    FirstName : joi.string().min(3).max(30).required(),
    LastName : joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    age: joi.number().integer().min(18).max(120).required(),
    gender: joi.string().valid('male', 'female', 'others').required(),
    password : joi.string().required(),
})

const updateUserSchema = joi.object({
    FirstName : joi.string().min(3).max(30),
    LastName : joi.string().min(3).max(30),
    email: joi.string().email(),
})


module.exports = {
    createUserSchema,
    updateUserSchema,
}