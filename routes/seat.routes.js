
const express = require("express");
const router = express.Router();

const {
  createSeat,
  getAllSeats,
  getSeatById,
  updateSeat,
  deleteSeat,
} = require("../controllers/seat.controller");

const validate = require("../middlewares/validate.middleware");

const {
  createSeatSchema,
  updateSeatSchema,
} = require("../validations/seat.validation");

/**
 * @swagger
 * tags:
 *   name: Seats
 *   description: Seat management
 */

/**
 * @swagger
 * /api/seats:
 *   post:
 *     summary: Create a seat
 *     tags: [Seats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_id:
 *                 type: integer
 *               row_number:
 *                 type: integer
 *               number:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       201:
 *         description: Seat created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createSeatSchema), createSeat);

/**
 * @swagger
 * /api/seats:
 *   get:
 *     summary: Get all seats
 *     tags: [Seats]
 *     responses:
 *       200:
 *         description: List of seats
 */
router.get("/", getAllSeats);

/**
 * @swagger
 * /api/seats/{id}:
 *   get:
 *     summary: Get a seat by ID
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Seat found
 *       404:
 *         description: Seat not found
 */
router.get("/:id", getSeatById);

/**
 * @swagger
 * /api/seats/{id}:
 *   put:
 *     summary: Update a seat
 *     tags: [Seats]
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
 *               sector_id:
 *                 type: integer
 *                 example: 1
 *               row_number:
 *                 type: integer
 *                 example: 5
 *               number:
 *                 type: integer
 *                 example: 12
 *               venue_id:
 *                 type: integer
 *                 example: 1
 *               seat_type_id:
 *                 type: integer
 *                 example: 2
 *               location_in_schema:
 *                 type: string
 *                 example: "POINT(10 20)"
 *     responses:
 *       200:
 *         description: Seat updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Seat not found
 */
router.put("/:id", validate(updateSeatSchema), updateSeat);

/**
 * @swagger
 * /api/seats/{id}:
 *   delete:
 *     summary: Delete a seat
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 */
router.delete("/:id", deleteSeat);

module.exports = router;