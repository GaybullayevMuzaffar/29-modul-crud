
const express = require("express");
const router = express.Router();

const {
  createDistrict,
  getAllDistricts,
  getDistrictById,
  updateDistrict,
  deleteDistrict,
} = require("../controllers/district.controller");

const {
  createDistrictSchema,
  updateDistrictSchema,
} = require("../validations/district.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Districts
 *   description: District CRUD API
 */

/**
 * @swagger
 * /api/districts:
 *   post:
 *     summary: Yangi district yaratish
 *     tags: [Districts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: District yaratildi
 *       400:
 *         description: Validatsiya xatosi
 */
router.post("/", validate(createDistrictSchema), createDistrict);

/**
 * @swagger
 * /api/districts:
 *   get:
 *     summary: Barcha districtlarni olish
 *     tags: [Districts]
 *     responses:
 *       200:
 *         description: Districtlar ro'yxati
 */
router.get("/", getAllDistricts);

/**
 * @swagger
 * /api/districts/{id}:
 *   get:
 *     summary: ID orqali district olish
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: District topildi
 *       404:
 *         description: District topilmadi
 */
router.get("/:id", getDistrictById);

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     summary: District ma'lumotlarini yangilash
 *     tags: [Districts]
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
 *                 example: Chortoq
 *               region_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: District yangilandi
 *       400:
 *         description: Validatsiya xatosi
 *       404:
 *         description: District topilmadi
 */
router.put("/:id", validate(updateDistrictSchema), updateDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     summary: Districtni o'chirish
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: District o'chirildi
 *       404:
 *         description: District topilmadi
 */
router.delete("/:id", deleteDistrict);

module.exports = router;