const joi = require( 'joi' );

const createRoleSchema = joi.object({
    role_name : joi.string().required(),
    description : joi.string().required(),
    user_id : joi.number().integer().required(),
})

module.exports = {
    createRoleSchema,
}