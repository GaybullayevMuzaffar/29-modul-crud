const Joi = require("joi");

const createDistrictSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  region_id: Joi.number().integer().positive().required(),
});

const updateDistrictSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  region_id: Joi.number().integer().positive().required(),
});

module.exports = {
  createDistrictSchema,
  updateDistrictSchema,
};