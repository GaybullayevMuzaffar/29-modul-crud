
const router = require("express").Router();

const {
  createFlat,
  getAllFlats,
  getFlatById,
  updateFlat,
  deleteFlat,
} = require("../controllers/flat.controller");

const {
  createFlatSchema,
  updateFlatSchema,
} = require("../validations/flat.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Flats
 *   description: Flat CRUD API
 */

/**
 * @swagger
 * /api/flats:
 *   post:
 *     summary: Yangi flat yaratish
 *     tags: [Flats]
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
 *         description: Flat yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *
 *   get:
 *     summary: Barcha flatlarni olish
 *     tags: [Flats]
 *     responses:
 *       200:
 *         description: Flatlar ro'yxati
 */

/**
 * @swagger
 * /api/flats/{id}:
 *   get:
 *     summary: ID orqali flatni olish
 *     tags: [Flats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Flat topildi
 *       404:
 *         description: Flat topilmadi
 *
 *   put:
 *     summary: Flat ma'lumotlarini yangilash
 *     tags: [Flats]
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
 *                 example: "2-xonadon"
 *     responses:
 *       200:
 *         description: Flat yangilandi
 *       400:
 *         description: Validatsiya xatosi
 *       404:
 *         description: Flat topilmadi
 *
 *   delete:
 *     summary: Flatni o'chirish
 *     tags: [Flats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Flat o'chirildi
 *       404:
 *         description: Flat topilmadi
 */

router.post("/", validate(createFlatSchema), createFlat);
router.get("/", getAllFlats);
router.get("/:id", getFlatById);
router.put("/:id", validate(updateFlatSchema), updateFlat);
router.delete("/:id", deleteFlat);

module.exports = router;