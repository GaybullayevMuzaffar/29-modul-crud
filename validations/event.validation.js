const Joi = require("joi");

const createEventSchema = Joi.object({
  name: Joi.string().min(2).max(200).required(),
  photo: Joi.string().allow(null, "").optional(),
  start_date: Joi.date().iso().required(),
  start_time: Joi.string().pattern(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/).required(),
  finish_date: Joi.date().iso().required(),
  finish_time: Joi.string().pattern(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/).required(),
  info: Joi.string().allow(null, "").optional(),
  event_type_id: Joi.number().integer().positive().required(),
  human_category_id: Joi.number().integer().positive().required(),
  venue_id: Joi.number().integer().positive().required(),
  lang_id: Joi.number().integer().positive().required(),
  release_date: Joi.date().iso().allow(null).optional(),
});

const updateEventSchema = Joi.object({
  name: Joi.string().min(2).max(200),
  photo: Joi.string().allow(null, ""),
  start_date: Joi.date().iso(),
  start_time: Joi.string().pattern( /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/ ),
  finish_date: Joi.date().iso(),
  finish_time: Joi.string().pattern(  /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/  ),
  info: Joi.string().allow(null, ""),
  event_type_id: Joi.number().integer().positive(),
  human_category_id: Joi.number().integer().positive(),
  venue_id: Joi.number().integer().positive(),
  lang_id: Joi.number().integer().positive(),
  release_date: Joi.date().iso().allow(null),
}).min(1);

module.exports = {
  createEventSchema,
  updateEventSchema,
};