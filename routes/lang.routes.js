
const express = require("express");
const router = express.Router();

const {
  createLang,
  getAllLangs,
  getLangById,
  updateLang,
  deleteLang,
} = require("../controllers/lang.controller");

const {
  createLangSchema,
  updateLangSchema,
} = require("../validations/lang.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Languages
 *   description: Language management
 */

/**
 * @swagger
 * /api/langs:
 *   post:
 *     summary: Create a language
 *     tags: [Languages]
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
 *         description: Language created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createLangSchema), createLang);

/**
 * @swagger
 * /api/langs:
 *   get:
 *     summary: Get all languages
 *     tags: [Languages]
 *     responses:
 *       200:
 *         description: List of languages
 */
router.get("/", getAllLangs);

/**
 * @swagger
 * /api/langs/{id}:
 *   get:
 *     summary: Get a language by ID
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Language found
 *       404:
 *         description: Language not found
 */
router.get("/:id", getLangById);

/**
 * @swagger
 * /api/langs/{id}:
 *   put:
 *     summary: Update a language
 *     tags: [Languages]
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
 *                 example: English
 *     responses:
 *       200:
 *         description: Language updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Language not found
 */
router.put("/:id", validate(updateLangSchema), updateLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   delete:
 *     summary: Delete a language
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Language deleted
 *       404:
 *         description: Language not found
 */
router.delete("/:id", deleteLang);

module.exports = router;