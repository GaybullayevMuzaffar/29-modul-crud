const Joi = require("joi");

const createSectorSchema = Joi.object({
  sector_name: Joi.string().min(2).max(100).required(),
});

const updateSectorSchema = Joi.object({
  sector_name: Joi.string().min(2).max(100),
}).min(1);

module.exports = {
  createSectorSchema,
  updateSectorSchema,
};