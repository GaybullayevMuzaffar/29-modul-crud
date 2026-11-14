
const router = require("express").Router();

const {
  createCartItem,
  getAllCartItems,
  getCartItemById,
  updateCartItem,
  deleteCartItem,
} = require("../controllers/cart_item.controller");

const {
  createCartItemSchema,
  updateCartItemSchema,
} = require("../validations/cart_item.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Cart Items
 *   description: Cart item management
 */

/**
 * @swagger
 * /api/cart-items:
 *   post:
 *     summary: Create a cart item
 *     tags: [Cart Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               ticket_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Cart item created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createCartItemSchema), createCartItem);

/**
 * @swagger
 * /api/cart-items:
 *   get:
 *     summary: Get all cart items
 *     tags: [Cart Items]
 *     responses:
 *       200:
 *         description: List of cart items
 */
router.get("/", getAllCartItems);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   get:
 *     summary: Get a cart item by ID
 *     tags: [Cart Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart item found
 *       404:
 *         description: Cart item not found
 */
router.get("/:id", getCartItemById);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   put:
 *     summary: Update a cart item
 *     tags: [Cart Items]
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
 *               cart_id:
 *                 type: integer
 *                 example: 1
 *               ticket_id:
 *                 type: integer
 *                 example: 1
 *               quantity:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Cart item updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Cart item not found
 */
router.put("/:id", validate(updateCartItemSchema), updateCartItem);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   delete:
 *     summary: Delete a cart item
 *     tags: [Cart Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart item deleted
 *       404:
 *         description: Cart item not found
 */
router.delete("/:id", deleteCartItem);

module.exports = router;