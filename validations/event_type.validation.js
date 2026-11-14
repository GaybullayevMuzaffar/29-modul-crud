const Joi = require("joi");

const createEventTypeSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  parent_event_type_id: Joi.number().integer().positive().allow(null).optional(),
});

const updateEventTypeSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  parent_event_type_id: Joi.number().integer().positive().allow(null),
}).min(1);

module.exports = {
  createEventTypeSchema,
  updateEventTypeSchema,
};