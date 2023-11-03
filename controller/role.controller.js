const { Response_Codes } = require("../core/constants");
const { responseHandler } = require("../core/responseHandler");
const { createRoleSchema } = require("../core/schemas/role.schema");
const { createRoleService, getAllDataService, getAllDataRightService, getAllDataLeftService } = require("../services/role.service");

const createRoleController = async (req, res,) => {
    
    const { error } = createRoleSchema.validate(req.body);
    
    if(error) {
        responseHandler({
            statusCode: Response_Codes.FAILURE_FORBIDDEN_ACCESS,
            error: true,
            res,
            message: error.message,
          });
    }
    createRoleService(req , res);
};

const getAllDataController = async (req , res) => {
    console.log('insider controllre')
    getAllDataService(req , res);
};

const getAllDataRightController = async (req , res) => {
    getAllDataRightService(req , res);
};

const getAllDataLeftController = async (req , res) => {
    getAllDataLeftService(req , res);
};

module.exports = {
    createRoleController,
    getAllDataController,
    getAllDataRightController,
    getAllDataLeftController
}