
const router = require("express").Router();

const {
  createTicketType,
  getAllTicketTypes,
  getTicketTypeById,
  updateTicketType,
  deleteTicketType,
} = require("../controllers/ticket_type.controller");

const {
  createTicketTypeSchema,
  updateTicketTypeSchema,
} = require("../validations/ticket_type.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Ticket Types
 *   description: Ticket type management
 */

/**
 * @swagger
 * /api/ticket-types:
 *   post:
 *     summary: Create a ticket type
 *     tags: [Ticket Types]
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
 *         description: Ticket type created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createTicketTypeSchema), createTicketType);

/**
 * @swagger
 * /api/ticket-types:
 *   get:
 *     summary: Get all ticket types
 *     tags: [Ticket Types]
 *     responses:
 *       200:
 *         description: List of ticket types
 */
router.get("/", getAllTicketTypes);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   get:
 *     summary: Get a ticket type by ID
 *     tags: [Ticket Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ticket type found
 *       404:
 *         description: Ticket type not found
 */
router.get("/:id", getTicketTypeById);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   put:
 *     summary: Update a ticket type
 *     tags: [Ticket Types]
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
 *         description: Ticket type updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Ticket type not found
 */
router.put("/:id", validate(updateTicketTypeSchema), updateTicketType);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   delete:
 *     summary: Delete a ticket type
 *     tags: [Ticket Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ticket type deleted
 *       404:
 *         description: Ticket type not found
 */
router.delete("/:id", deleteTicketType);

module.exports = router;