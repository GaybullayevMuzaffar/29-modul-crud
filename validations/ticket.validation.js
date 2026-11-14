const Joi = require("joi");

const createTicketSchema = Joi.object({
  event_id: Joi.number().integer().positive().required(),
  seat_id: Joi.number().integer().positive().required(),
  price: Joi.number().precision(2).min(0).required(),
  service_fee: Joi.number().precision(2).min(0).default(0),
  status_id: Joi.number().integer().positive().required(),
  ticket_type_id: Joi.number().integer().positive().required(),
});

const updateTicketSchema = Joi.object({
  event_id: Joi.number().integer().positive(),
  seat_id: Joi.number().integer().positive(),
  price: Joi.number().precision(2).min(0),
  service_fee: Joi.number().precision(2).min(0),
  status_id: Joi.number().integer().positive(),
  ticket_type_id: Joi.number().integer().positive(),
}).min(1);

module.exports = {
  createTicketSchema,
  updateTicketSchema,
};