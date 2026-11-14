
const express = require("express");
const router = express.Router();

const {
  createGender,
  getAllGenders,
  getGenderById,
  updateGender,
  deleteGender,
} = require("../controllers/gender.controller");

const {
  createGenderSchema,
  updateGenderSchema,
} = require("../validations/gender.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Genders
 *   description: Gender management
 */

/**
 * @swagger
 * /api/genders:
 *   post:
 *     summary: Create a gender
 *     tags: [Genders]
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
 *       201:
 *         description: Gender created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createGenderSchema), createGender);

/**
 * @swagger
 * /api/genders:
 *   get:
 *     summary: Get all genders
 *     tags: [Genders]
 *     responses:
 *       200:
 *         description: List of genders
 */
router.get("/", getAllGenders);

/**
 * @swagger
 * /api/genders/{id}:
 *   get:
 *     summary: Get a gender by ID
 *     tags: [Genders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gender found
 *       404:
 *         description: Gender not found
 */
router.get("/:id", getGenderById);

/**
 * @swagger
 * /api/genders/{id}:
 *   put:
 *     summary: Update a gender
 *     tags: [Genders]
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
 *                 example: Female
 *     responses:
 *       200:
 *         description: Gender updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Gender not found
 */
router.put("/:id", validate(updateGenderSchema), updateGender);

/**
 * @swagger
 * /api/genders/{id}:
 *   delete:
 *     summary: Delete a gender
 *     tags: [Genders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gender deleted
 *       404:
 *         description: Gender not found
 */
router.delete("/:id", deleteGender);

module.exports = router;