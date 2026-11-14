
const express = require("express");
const router = express.Router();

const {
  createEventType,
  getAllEventTypes,
  getEventTypeById,
  updateEventType,
  deleteEventType,
} = require("../controllers/event_type.controller");

const {
  createEventTypeSchema,
  updateEventTypeSchema,
} = require("../validations/event_type.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Event Types
 *   description: Event Type CRUD API
 */

/**
 * @swagger
 * /api/event-types:
 *   post:
 *     summary: Yangi event type yaratish
 *     tags: [Event Types]
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
 *         description: Event type yaratildi
 *       400:
 *         description: Validatsiya xatosi
 */
router.post("/", validate(createEventTypeSchema), createEventType);

/**
 * @swagger
 * /api/event-types:
 *   get:
 *     summary: Barcha event typelarni olish
 *     tags: [Event Types]
 *     responses:
 *       200:
 *         description: Event typelar ro'yxati
 */
router.get("/", getAllEventTypes);

/**
 * @swagger
 * /api/event-types/{id}:
 *   get:
 *     summary: ID orqali event type olish
 *     tags: [Event Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Event type topildi
 *       404:
 *         description: Event type topilmadi
 */
router.get("/:id", getEventTypeById);

/**
 * @swagger
 * /api/event-types/{id}:
 *   put:
 *     summary: Event type ma'lumotlarini yangilash
 *     tags: [Event Types]
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
 *     responses:
 *       200:
 *         description: Event type yangilandi
 *       400:
 *         description: Validatsiya xatosi
 *       404:
 *         description: Event type topilmadi
 */
router.put("/:id", validate(updateEventTypeSchema), updateEventType);

/**
 * @swagger
 * /api/event-types/{id}:
 *   delete:
 *     summary: Event typeni o'chirish
 *     tags: [Event Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Event type o'chirildi
 *       404:
 *         description: Event type topilmadi
 */
router.delete("/:id", deleteEventType);

module.exports = router;