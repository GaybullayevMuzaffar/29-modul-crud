
const express = require("express");
const router = express.Router();

const {
  createCountry,
  getAllCountries,
  getCountryById,
  updateCountry,
  deleteCountry,
} = require("../controllers/country.controller");

const {
  createCountrySchema,
  updateCountrySchema,
} = require("../validations/country.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Countries
 *   description: Country CRUD API
 */

/**
 * @swagger
 * /api/countries:
 *   post:
 *     summary: Yangi country yaratish
 *     tags: [Countries]
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
 *         description: Country yaratildi
 *       400:
 *         description: Validatsiya xatosi
 */
router.post("/", validate(createCountrySchema), createCountry);

/**
 * @swagger
 * /api/countries:
 *   get:
 *     summary: Barcha countrylarni olish
 *     tags: [Countries]
 *     responses:
 *       200:
 *         description: Countrylar ro'yxati
 */
router.get("/", getAllCountries);

/**
 * @swagger
 * /api/countries/{id}:
 *   get:
 *     summary: ID orqali country olish
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Country topildi
 *       404:
 *         description: Country topilmadi
 */
router.get("/:id", getCountryById);

/**
 * @swagger
 * /api/countries/{id}:
 *   put:
 *     summary: Country ma'lumotlarini yangilash
 *     tags: [Countries]
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
 *                 example: Uzbekistan
 *     responses:
 *       200:
 *         description: Country yangilandi
 *       400:
 *         description: Validatsiya xatosi
 *       404:
 *         description: Country topilmadi
 */
router.put("/:id", validate(updateCountrySchema), updateCountry);

/**
 * @swagger
 * /api/countries/{id}:
 *   delete:
 *     summary: Countryni o'chirish
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Country o'chirildi
 *       404:
 *         description: Country topilmadi
 */
router.delete("/:id", deleteCountry);

module.exports = router;