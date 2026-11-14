const Joi = require("joi");

const createVenueTypesSchema = Joi.object({
  venueId: Joi.number().integer().positive().required(),
  typeId: Joi.number().integer().positive().required(),
});

const updateVenueTypesSchema = Joi.object({
  venueId: Joi.number().integer().positive(),
  typeId: Joi.number().integer().positive(),
}).min(1);

module.exports = {
  createVenueTypesSchema,
  updateVenueTypesSchema,
};