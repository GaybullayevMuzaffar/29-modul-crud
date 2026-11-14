
const express = require("express");
const router = express.Router();

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/event.controller");

const {
  createEventSchema,
  updateEventSchema,
} = require("../validations/event.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Event CRUD API
 */

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Yangi event yaratish
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
1 *               description:
 *                 type: string
 *               admin_id:
 *                 type: integer
 *               event_type_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Event yaratildi
 *       400:
 *         description: Validatsiya xatosi
 */
router.post("/", validate(createEventSchema), createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Barcha eventlarni olish
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Eventlar ro'yxati
 */
router.get("/", getAllEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: ID orqali event olish
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Event topildi
 *       404:
 *         description: Event topilmadi
 */
router.get("/:id", getEventById);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     summary: Event ma'lumotlarini yangilash
 *     tags: [Events]
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
 *                 example: Concert
 *               description:
 *                 type: string
 *                 example: Updated concert
 *               admin_id:
 *                 type: integer
 *               event_type_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Event yangilandi
 *       400:
 *         description: Validatsiya xatosi
 *       404:
 *         description: Event topilmadi
 */
router.put("/:id", validate(updateEventSchema), updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Eventni o'chirish
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Event o'chirildi
 *       404:
 *         description: Event topilmadi
 */
router.delete("/:id", deleteEvent);

module.exports = router;