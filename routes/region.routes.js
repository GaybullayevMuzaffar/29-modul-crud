const express = require("express");
const router = express.Router();

const {
  createRegion,
  getAllRegions,
  getRegionById,
  updateRegion,
  deleteRegion,
} = require("../controllers/region.controller");

const {
  createRegionSchema,
  updateRegionSchema,
} = require("../validations/region.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Regions
 *   description: Region CRUD API
 */

/**
 * @swagger
 * /api/regions:
 *   post:
 *     summary: Yangi region yaratish
 *     tags: [Regions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               country_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Region yaratildi
 *       400:
 *         description: Validatsiya xatosi
 */
router.post("/", validate(createRegionSchema), createRegion);

/**
 * @swagger
 * /api/regions:
 *   get:
 *     summary: Barcha regionlarni olish
 *     tags: [Regions]
 *     responses:
 *       200:
 *         description: Regionlar ro'yxati
 */
router.get("/", getAllRegions);

/**
 * @swagger
 * /api/regions/{id}:
 *   get:
 *     summary: ID orqali region olish
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Region topildi
 *       404:
 *         description: Region topilmadi
 */
router.get("/:id", getRegionById);

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     summary: Region ma'lumotlarini yangilash
 *     tags: [Regions]
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
 *                 example: Namangan
 *               country_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Region yangilandi
 *       400:
 *         description: Validatsiya xatosi
 *       404:
 *         description: Region topilmadi
 */
router.put("/:id", validate(updateRegionSchema), updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     summary: Regionni o'chirish
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Region o'chirildi
 *       404:
 *         description: Region topilmadi
 */
router.delete("/:id", deleteRegion);

module.exports = router;