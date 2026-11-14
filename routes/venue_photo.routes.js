
const express = require("express");
const router = express.Router();

const {
  createVenuePhoto,
  getAllVenuePhotos,
  getVenuePhotoById,
  updateVenuePhoto,
  deleteVenuePhoto,
} = require("../controllers/venue_photo.controller");

const validate = require("../middlewares/validate.middleware");

const {
  createVenuePhotoSchema,
  updateVenuePhotoSchema,
} = require("../validations/venue_photo.validation");

/**
 * @swagger
 * tags:
 *   name: Venue Photos
 *   description: Venue photo management
 */

/**
 * @swagger
 * /api/venue-photos:
 *   post:
 *     summary: Create a venue photo
 *     tags: [Venue Photos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Venue photo created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createVenuePhotoSchema), createVenuePhoto);

/**
 * @swagger
 * /api/venue-photos:
 *   get:
 *     summary: Get all venue photos
 *     tags: [Venue Photos]
 *     responses:
 *       200:
 *         description: List of venue photos
 */
router.get("/", getAllVenuePhotos);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   get:
 *     summary: Get a venue photo by ID
 *     tags: [Venue Photos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venue photo found
 *       404:
 *         description: Venue photo not found
 */
router.get("/:id", getVenuePhotoById);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   put:
 *     summary: Update a venue photo
 *     tags: [Venue Photos]
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
 *               venue_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Venue photo updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Venue photo not found
 */
router.put("/:id", validate(updateVenuePhotoSchema), updateVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   delete:
 *     summary: Delete a venue photo
 *     tags: [Venue Photos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venue photo deleted
 *       404:
 *         description: Venue photo not found
 */
router.delete("/:id", deleteVenuePhoto);

module.exports = router;