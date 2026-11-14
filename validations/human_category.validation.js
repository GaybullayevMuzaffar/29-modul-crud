const Joi = require("joi");

const createHumanCategorySchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  start_age: Joi.number().integer().min(0).max(32767).required(),
  finish_age: Joi.number().integer().min(0).max(32767).min(Joi.ref("start_age")).required(),
  gender_id: Joi.number().integer().positive().required(),
});

const updateHumanCategorySchema = Joi.object({
  name: Joi.string().min(2).max(100),
  start_age: Joi.number().integer().min(0).max(32767),
  finish_age: Joi.number().integer().min(0).max(32767),
  gender_id: Joi.number().integer().positive(),
}).min(1);

module.exports = {
  createHumanCategorySchema,
  updateHumanCategorySchema,
};