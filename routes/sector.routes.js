
const express = require("express");
const router = express.Router();

const {
  createSector,
  getAllSectors,
  getSectorById,
  updateSector,
  deleteSector,
} = require("../controllers/sector.controller");

const validate = require("../middlewares/validate.middleware");

const {
  createSectorSchema,
  updateSectorSchema,
} = require("../validations/sector.validation");

/**
 * @swagger
 * tags:
 *   name: Sectors
 *   description: Sector management
 */

/**
 * @swagger
 * /api/sectors:
 *   post:
 *     summary: Create a sector
 *     tags: [Sectors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               venue_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Sector created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createSectorSchema), createSector);

/**
 * @swagger
 * /api/sectors:
 *   get:
 *     summary: Get all sectors
 *     tags: [Sectors]
 *     responses:
 *       200:
 *         description: List of sectors
 */
router.get("/", getAllSectors);

/**
 * @swagger
 * /api/sectors/{id}:
 *   get:
 *     summary: Get a sector by ID
 *     tags: [Sectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sector found
 *       404:
 *         description: Sector not found
 */
router.get("/:id", getSectorById);

/**
 * @swagger
 * /api/sectors/{id}:
 *   put:
 *     summary: Update a sector
 *     tags: [Sectors]
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
 *               venue_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Sector updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Sector not found
 */
router.put("/:id", validate(updateSectorSchema), updateSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   delete:
 *     summary: Delete a sector
 *     tags: [Sectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sector deleted
 *       404:
 *         description: Sector not found
 */
router.delete("/:id", deleteSector);

module.exports = router;