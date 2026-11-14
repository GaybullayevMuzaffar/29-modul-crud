const express = require("express");
const router = express.Router();

const {
  createSeatType,
  getAllSeatTypes,
  getSeatTypeById,
  updateSeatType,
  deleteSeatType,
} = require("../controllers/seat_type.controller");

const validate = require("../middlewares/validate.middleware");

const {
  createSeatTypeSchema,
  updateSeatTypeSchema,
} = require("../validations/seat_type.validation");

/**
 * @swagger
 * tags:
 *   name: Seat Types
 *   description: Seat type management
 */

/**
 * @swagger
 * /api/seat-types:
 *   post:
 *     summary: Create a seat type
 *     tags: [Seat Types]
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
 *         description: Seat type created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createSeatTypeSchema), createSeatType);

/**
 * @swagger
 * /api/seat-types:
 *   get:
 *     summary: Get all seat types
 *     tags: [Seat Types]
 *     responses:
 *       200:
 *         description: List of seat types
 */
router.get("/", getAllSeatTypes);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   get:
 *     summary: Get a seat type by ID
 *     tags: [Seat Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Seat type found
 *       404:
 *         description: Seat type not found
 */
router.get("/:id", getSeatTypeById);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   put:
 *     summary: Update a seat type
 *     tags: [Seat Types]
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
 *                 example: Standard
 *     responses:
 *       200:
 *         description: Seat type updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Seat type not found
 */
router.put("/:id", validate(updateSeatTypeSchema), updateSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   delete:
 *     summary: Delete a seat type
 *     tags: [Seat Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Seat type deleted
 *       404:
 *         description: Seat type not found
 */
router.delete("/:id", deleteSeatType);

module.exports = router;