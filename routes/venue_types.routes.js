
const express = require("express");
const router = express.Router();

const {
  createVenueTypes,
  getAllVenueTypes,
  getVenueTypesById,
  updateVenueTypes,
  deleteVenueTypes,
} = require("../controllers/venue_types.controller");

const validate = require("../middlewares/validate.middleware");

const {
  createVenueTypesSchema,
  updateVenueTypesSchema,
} = require("../validations/venue_types.validation");

/**
 * @swagger
 * tags:
 *   name: Venue Types
 *   description: Venue and type relationships
 */

/**
 * @swagger
 * /api/venue-types:
 *   post:
 *     summary: Create a venue type relationship
 *     tags: [Venue Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: integer
 *               typeId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Venue type relationship created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createVenueTypesSchema), createVenueTypes);

/**
 * @swagger
 * /api/venue-types:
 *   get:
 *     summary: Get all venue type relationships
 *     tags: [Venue Types]
 *     responses:
 *       200:
 *         description: List of venue type relationships
 */
router.get("/", getAllVenueTypes);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   get:
 *     summary: Get a venue type relationship by ID
 *     tags: [Venue Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venue type relationship found
 *       404:
 *         description: Venue type relationship not found
 */
router.get("/:id", getVenueTypesById);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   put:
 *     summary: Update a venue type relationship
 *     tags: [Venue Types]
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
 *               venueId:
 *                 type: integer
 *               typeId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Venue type relationship updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Venue type relationship not found
 */
router.put("/:id", validate(updateVenueTypesSchema), updateVenueTypes);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   delete:
 *     summary: Delete a venue type relationship
 *     tags: [Venue Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venue type relationship deleted
 *       404:
 *         description: Venue type relationship not found
 */
router.delete("/:id", deleteVenueTypes);

module.exports = router;