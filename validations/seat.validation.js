const Joi = require("joi");

const createSeatSchema = Joi.object({
  sector_id: Joi.number().integer().positive().required(),
  row_number: Joi.number().integer().positive().required(),
  number: Joi.number().integer().positive().required(),
  venue_id: Joi.number().integer().positive().required(),
  seat_type_id: Joi.number().integer().positive().required(),
  location_in_schema: Joi.object().allow(null).optional(),
});

const updateSeatSchema = Joi.object({
  sector_id: Joi.number().integer().positive(),
  row_number: Joi.number().integer().positive(),
  number: Joi.number().integer().positive(),
  venue_id: Joi.number().integer().positive(),
  seat_type_id: Joi.number().integer().positive(),
  location_in_schema: Joi.object().allow(null),
}).min(1);

module.exports = {
  createSeatSchema,
  updateSeatSchema,
};