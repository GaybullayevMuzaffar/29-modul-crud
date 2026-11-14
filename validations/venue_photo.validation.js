const Joi = require("joi");

const createVenuePhotoSchema = Joi.object({
  venueId: Joi.number().integer().positive().required(),
  url: Joi.string().uri().required(),
});

const updateVenuePhotoSchema = Joi.object({
  venueId: Joi.number().integer().positive(),
  url: Joi.string().uri(),
}).min(1);

module.exports = {
  createVenuePhotoSchema,
  updateVenuePhotoSchema,
};