const Joi = require("joi");

const createVenueSchema = Joi.object({
  name: Joi.string().min(2).max(150).required(),
  address: Joi.string().allow("", null).optional(),
  location: Joi.string().allow("", null).optional(),
  site: Joi.string().uri().allow("", null).optional(),
  phone: Joi.string().allow("", null).optional(),
  schema: Joi.object().allow(null).optional(),
  region_id: Joi.number().integer().positive().required(),
  district_id: Joi.number().integer().positive().required(),
});

const updateVenueSchema = Joi.object({
  name: Joi.string().min(2).max(150),
  address: Joi.string().allow("", null),
  location: Joi.string().allow("", null),
  site: Joi.string().uri().allow("", null),
  phone: Joi.string().allow("", null),
  schema: Joi.object().allow(null),
  region_id: Joi.number().integer().positive(),
  district_id: Joi.number().integer().positive(),
}).min(1);

module.exports = {
  createVenueSchema,
  updateVenueSchema,
};