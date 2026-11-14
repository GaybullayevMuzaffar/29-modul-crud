
const router = require("express").Router();

const {
  createTicketStatus,
  getAllTicketStatuses,
  getTicketStatusById,
  updateTicketStatus,
  deleteTicketStatus,
} = require("../controllers/ticket_status.controller");

const {
  createTicketStatusSchema,
  updateTicketStatusSchema,
} = require("../validations/ticket_status.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Ticket Statuses
 *   description: Ticket status management
 */

/**
 * @swagger
 * /api/ticket-statuses:
 *   post:
 *     summary: Create a ticket status
 *     tags: [Ticket Statuses]
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
 *         description: Ticket status created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createTicketStatusSchema), createTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses:
 *   get:
 *     summary: Get all ticket statuses
 *     tags: [Ticket Statuses]
 *     responses:
 *       200:
 *         description: List of ticket statuses
 */
router.get("/", getAllTicketStatuses);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   get:
 *     summary: Get a ticket status by ID
 *     tags: [Ticket Statuses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ticket status found
 *       404:
 *         description: Ticket status not found
 */
router.get("/:id", getTicketStatusById);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   put:
 *     summary: Update a ticket status
 *     tags: [Ticket Statuses]
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
 *                 example: Active
 *     responses:
 *       200:
 *         description: Ticket status updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Ticket status not found
 */
router.put("/:id", validate(updateTicketStatusSchema), updateTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   delete:
 *     summary: Delete a ticket status
 *     tags: [Ticket Statuses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ticket status deleted
 *       404:
 *         description: Ticket status not found
 */
router.delete("/:id", deleteTicketStatus);

module.exports = router;