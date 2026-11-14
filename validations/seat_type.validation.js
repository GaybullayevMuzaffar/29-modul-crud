const Joi = require("joi");

const createSeatTypeSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
});

const updateSeatTypeSchema = Joi.object({
  name: Joi.string().min(2).max(100),
}).min(1);

module.exports = {
  createSeatTypeSchema,
  updateSeatTypeSchema,
};