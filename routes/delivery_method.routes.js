
const router = require("express").Router();

const {
  createDeliveryMethod,
  getAllDeliveryMethods,
  getDeliveryMethodById,
  updateDeliveryMethod,
  deleteDeliveryMethod,
} = require("../controllers/delivery_method.controller");

const {
  createDeliveryMethodSchema,
  updateDeliveryMethodSchema,
} = require("../validations/delivery_method.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Delivery Methods
 *   description: Delivery method management
 */

/**
 * @swagger
 * /api/delivery-methods:
 *   post:
 *     summary: Create a delivery method
 *     tags: [Delivery Methods]
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
 *         description: Delivery method created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createDeliveryMethodSchema), createDeliveryMethod);

/**
 * @swagger
 * /api/delivery-methods:
 *   get:
 *     summary: Get all delivery methods
 *     tags: [Delivery Methods]
 *     responses:
 *       200:
 *         description: List of delivery methods
 */
router.get("/", getAllDeliveryMethods);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   get:
 *     summary: Get a delivery method by ID
 *     tags: [Delivery Methods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Delivery method found
 *       404:
 *         description: Delivery method not found
 */
router.get("/:id", getDeliveryMethodById);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   put:
 *     summary: Update a delivery method
 *     tags: [Delivery Methods]
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
 *                 example: Courier
 *     responses:
 *       200:
 *         description: Delivery method updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Delivery method not found
 */
router.put("/:id", validate(updateDeliveryMethodSchema), updateDeliveryMethod);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   delete:
 *     summary: Delete a delivery method
 *     tags: [Delivery Methods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Delivery method deleted
 *       404:
 *         description: Delivery method not found
 */
router.delete("/:id", deleteDeliveryMethod);

module.exports = router;