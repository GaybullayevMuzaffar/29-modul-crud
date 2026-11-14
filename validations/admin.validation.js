const Joi = require("joi");

const createAdminSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  login: Joi.string().min(3).max(100).required(),
  hashed_password: Joi.string().min(20).required(),
  is_active: Joi.boolean().default(true),
  is_creator: Joi.boolean().default(false),
  hashed_refresh_token: Joi.string().allow(null, "").optional(),
});

const updateAdminSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  login: Joi.string().min(3).max(100),
  hashed_password: Joi.string().min(20),
  is_active: Joi.boolean(),
  is_creator: Joi.boolean(),
  hashed_refresh_token: Joi.string().allow(null, ""),
}).min(1);

module.exports = {
  createAdminSchema,
  updateAdminSchema,
};