
const router = require("express").Router();

const {
  createPaymentMethod,
  getAllPaymentMethods,
  getPaymentMethodById,
  updatePaymentMethod,
  deletePaymentMethod,
} = require("../controllers/payment_method.controller");

const {
  createPaymentMethodSchema,
  updatePaymentMethodSchema,
} = require("../validations/payment_method.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Payment Methods
 *   description: Payment method management
 */

/**
 * @swagger
 * /api/payment-methods:
 *   post:
 *     summary: Create a payment method
 *     tags: [Payment Methods]
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
 *         description: Payment method created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createPaymentMethodSchema), createPaymentMethod);

/**
 * @swagger
 * /api/payment-methods:
 *   get:
 *     summary: Get all payment methods
 *     tags: [Payment Methods]
 *     responses:
 *       200:
 *         description: List of payment methods
 */
router.get("/", getAllPaymentMethods);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   get:
 *     summary: Get a payment method by ID
 *     tags: [Payment Methods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Payment method found
 *       404:
 *         description: Payment method not found
 */
router.get("/:id", getPaymentMethodById);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   put:
 *     summary: Update a payment method
 *     tags: [Payment Methods]
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
 *                 example: Cash
 *     responses:
 *       200:
 *         description: Payment method updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Payment method not found
 */
router.put("/:id", validate(updatePaymentMethodSchema), updatePaymentMethod);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   delete:
 *     summary: Delete a payment method
 *     tags: [Payment Methods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Payment method deleted
 *       404:
 *         description: Payment method not found
 */
router.delete("/:id", deletePaymentMethod);

module.exports = router;