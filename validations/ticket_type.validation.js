const Joi = require("joi");

const createTicketTypeSchema = Joi.object({
  ticket_type: Joi.string().min(2).max(100).required(),
});

const updateTicketTypeSchema = Joi.object({
  ticket_type: Joi.string().min(2).max(100).required(),
});

module.exports = {
  createTicketTypeSchema,
  updateTicketTypeSchema,
};