
const router = require("express").Router();

const {
  createCustomerAddress,
  getAllCustomerAddresses,
  getCustomerAddressById,
  updateCustomerAddress,
  deleteCustomerAddress,
} = require("../controllers/customer_address.controller");

const {
  createCustomerAddressSchema,
  updateCustomerAddressSchema,
} = require("../validations/customer_address.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Customer Addresses
 *   description: Customer address management
 */

/**
 * @swagger
 * /api/customer-addresses:
 *   post:
 *     summary: Create a customer address
 *     tags: [Customer Addresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *               flat_id:
 *                 type: integer
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer address created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createCustomerAddressSchema), createCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses:
 *   get:
 *     summary: Get all customer addresses
 *     tags: [Customer Addresses]
 *     responses:
 *       200:
 *         description: List of customer addresses
 */
router.get("/", getAllCustomerAddresses);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   get:
 *     summary: Get a customer address by ID
 *     tags: [Customer Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer address found
 *       404:
 *         description: Customer address not found
 */
router.get("/:id", getCustomerAddressById);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   put:
 *     summary: Update a customer address
 *     tags: [Customer Addresses]
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
 *               region_id:
 *                 type: integer
 *                 example: 1
 *               district_id:
 *                 type: integer
 *                 example: 1
 *               flat_id:
 *                 type: integer
 *                 example: 1
 *               address:
 *                 type: string
 *                 example: "Amir Temur ko'chasi, 10-uy"
 *     responses:
 *       200:
 *         description: Customer address updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Customer address not found
 */
router.put("/:id", validate(updateCustomerAddressSchema), updateCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   delete:
 *     summary: Delete a customer address
 *     tags: [Customer Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer address deleted
 *       404:
 *         description: Customer address not found
 */
router.delete("/:id", deleteCustomerAddress);

module.exports = router;
