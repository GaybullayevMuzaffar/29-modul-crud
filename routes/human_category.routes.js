
const express = require("express");
const router = express.Router();

const {
  createHumanCategory,
  getAllHumanCategories,
  getHumanCategoryById,
  updateHumanCategory,
  deleteHumanCategory,
} = require("../controllers/human_category.controller");

const {
  createHumanCategorySchema,
  updateHumanCategorySchema,
} = require("../validations/human_category.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Human Categories
 *   description: Human categories management
 */

/**
 * @swagger
 * /api/human-categories:
 *   post:
 *     summary: Create a human category
 *     tags: [Human Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               gender_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Human category created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createHumanCategorySchema), createHumanCategory);

/**
 * @swagger
 * /api/human-categories:
 *   get:
 *     summary: Get all human categories
 *     tags: [Human Categories]
 *     responses:
 *       200:
 *         description: List of human categories
 */
router.get("/", getAllHumanCategories);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   get:
 *     summary: Get a human category by ID
 *     tags: [Human Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Human category found
 *       404:
 *         description: Human category not found
 */
router.get("/:id", getHumanCategoryById);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   put:
 *     summary: Update a human category
 *     tags: [Human Categories]
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
 *                 example: Adult
 *               gender_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Human category updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Human category not found
 */
router.put("/:id", validate(updateHumanCategorySchema), updateHumanCategory);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   delete:
 *     summary: Delete a human category
 *     tags: [Human Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Human category deleted
 *       404:
 *         description: Human category not found
 */
router.delete("/:id", deleteHumanCategory);

module.exports = router;
