
const express = require("express");
const router = express.Router();

const {
  createVenue,
  getAllVenues,
  getVenueById,
  updateVenue,
  deleteVenue,
} = require("../controllers/venue.controller");

const validate = require("../middlewares/validate.middleware");

const {
  createVenueSchema,
  updateVenueSchema,
} = require("../validations/venue.validation");

/**
 * @swagger
 * tags:
 *   name: Venues
 *   description: Venue management
 */

/**
 * @swagger
 * /api/venues:
 *   post:
 *     summary: Create a venue
 *     tags: [Venues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Venue created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createVenueSchema), createVenue);

/**
 * @swagger
 * /api/venues:
 *   get:
 *     summary: Get all venues
 *     tags: [Venues]
 *     responses:
 *       200:
 *         description: List of venues
 */
router.get("/", getAllVenues);

/**
 * @swagger
 * /api/venues/{id}:
 *   get:
 *     summary: Get a venue by ID
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venue found
 *       404:
 *         description: Venue not found
 */
router.get("/:id", getVenueById);

/**
 * @swagger
 * /api/venues/{id}:
 *   put:
 *     summary: Update a venue
 *     tags: [Venues]
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
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Venue updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Venue not found
 */
router.put("/:id", validate(updateVenueSchema), updateVenue);

/**
 * @swagger
 * /api/venues/{id}:
 *   delete:
 *     summary: Delete a venue
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venue deleted
 *       404:
 *         description: Venue not found
 */
router.delete("/:id", deleteVenue);

module.exports = router;