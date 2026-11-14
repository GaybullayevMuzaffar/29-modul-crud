
const express = require("express");
const router = express.Router();

const {
  createTypes,
  getAllTypes,
  getTypesById,
  updateTypes,
  deleteTypes,
} = require("../controllers/types.controller");

const validate = require("../middlewares/validate.middleware");

const {
  createTypesSchema,
  updateTypesSchema,
} = require("../validations/types.validation");

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Types management
 */

/**
 * @swagger
 * /api/types:
 *   post:
 *     summary: Create a type
 *     tags: [Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Concert Hall
 *     responses:
 *       201:
 *         description: Type created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createTypesSchema), createTypes);

/**
 * @swagger
 * /api/types:
 *   get:
 *     summary: Get all types
 *     tags: [Types]
 *     responses:
 *       200:
 *         description: List of types
 */
router.get("/", getAllTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     summary: Get a type by ID
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Type found
 *       404:
 *         description: Type not found
 */
router.get("/:id", getTypesById);

/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     summary: Update a type
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Type updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Type not found
 */
router.put("/:id", validate(updateTypesSchema), updateTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     summary: Delete a type
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Type deleted
 *       404:
 *         description: Type not found
 */
router.delete("/:id", deleteTypes);

module.exports = router;