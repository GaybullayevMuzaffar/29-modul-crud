
const express = require("express");
const router = express.Router();

const {
  createFlat,
  getAllFlats,
  getFlatById,
  updateFlat,
  deleteFlat,
} = require("../controllers/flat.controller");

const validate = require("../middlewares/validate.middleware");

const {
  createFlatSchema,
  updateFlatSchema,
} = require("../validations/flat.validation");

/**
 * @swagger
 * tags:
 *   name: Flats
 *   description: Flat management
 */

/**
 * @swagger
 * /api/flats:
 *   post:
 *     summary: Create a flat
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
 *         description: Flat created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createFlatSchema), createFlat);

/**
 * @swagger
 * /api/flats:
 *   get:
 *     summary: Get all flats
 *     tags: [Flats]
 *     responses:
 *       200:
 *         description: List of flats
 */
router.get("/", getAllFlats);

/**
 * @swagger
 * /api/flats/{id}:
 *   get:
 *     summary: Get a flat by ID
 *     tags: [Flats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Flat found
 *       404:
 *         description: Flat not found
 */
router.get("/:id", getFlatById);

/**
 * @swagger
 * /api/flats/{id}:
 *   put:
 *     summary: Update a flat
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
 *     responses:
 *       200:
 *         description: Flat updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Flat not found
 */
router.put("/:id", validate(updateFlatSchema), updateFlat);

/**
 * @swagger
 * /api/flats/{id}:
 *   delete:
 *     summary: Delete a flat
 *     tags: [Flats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Flat deleted
 *       404:
 *         description: Flat not found
 */
router.delete("/:id", deleteFlat);

module.exports = router;