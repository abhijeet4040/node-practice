const joi = require( 'joi' );

const createRoleSchema = joi.object({
    Role_name : joi.string().required(),
    Description : joi.string().required(),
    User_id : joi.number().integer().required(),
})

module.exports = {
    createRoleSchema,
}