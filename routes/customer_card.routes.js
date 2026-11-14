
const router = require("express").Router();

const {
  createCustomerCard,
  getAllCustomerCards,
  getCustomerCardById,
  updateCustomerCard,
  deleteCustomerCard,
} = require("../controllers/customer_card.controller");

const {
  createCustomerCardSchema,
  updateCustomerCardSchema,
} = require("../validations/customer_card.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Customer Cards
 *   description: Customer card management
 */

/**
 * @swagger
 * /api/customer-cards:
 *   post:
 *     summary: Create a customer card
 *     tags: [Customer Cards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               card_number:
 *                 type: string
 *               bank_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer card created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createCustomerCardSchema), createCustomerCard);

/**
 * @swagger
 * /api/customer-cards:
 *   get:
 *     summary: Get all customer cards
 *     tags: [Customer Cards]
 *     responses:
 *       200:
 *         description: List of customer cards
 */
router.get("/", getAllCustomerCards);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   get:
 *     summary: Get a customer card by ID
 *     tags: [Customer Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer card found
 *       404:
 *         description: Customer card not found
 */
router.get("/:id", getCustomerCardById);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   put:
 *     summary: Update a customer card
 *     tags: [Customer Cards]
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
 *               customer_id:
 *                 type: integer
 *                 example: 1
 *               card_number:
 *                 type: string
 *                 example: "8600123412341234"
 *               bank_name:
 *                 type: string
 *                 example: "Uzcard"
 *     responses:
 *       200:
 *         description: Customer card updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Customer card not found
 */
router.put("/:id", validate(updateCustomerCardSchema), updateCustomerCard);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   delete:
 *     summary: Delete a customer card
 *     tags: [Customer Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer card deleted
 *       404:
 *         description: Customer card not found
 */
router.delete("/:id", deleteCustomerCard);

module.exports = router;