
const router = require("express").Router();

const {
  createCart,
  getAllCarts,
  getCartById,
  updateCart,
  deleteCart,
} = require("../controllers/cart.controller");

const {
  createCartSchema,
  updateCartSchema,
} = require("../validations/cart.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Cart management
 */

/**
 * @swagger
 * /api/carts:
 *   post:
 *     summary: Create a cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Cart created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createCartSchema), createCart);

/**
 * @swagger
 * /api/carts:
 *   get:
 *     summary: Get all carts
 *     tags: [Carts]
 *     responses:
 *       200:
 *         description: List of carts
 */
router.get("/", getAllCarts);

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     summary: Get a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart found
 *       404:
 *         description: Cart not found
 */
router.get("/:id", getCartById);

/**
 * @swagger
 * /api/carts/{id}:
 *   put:
 *     summary: Update a cart
 *     tags: [Carts]
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
 *     responses:
 *       200:
 *         description: Cart updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Cart not found
 */
router.put("/:id", validate(updateCartSchema), updateCart);

/**
 * @swagger
 * /api/carts/{id}:
 *   delete:
 *     summary: Delete a cart
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart deleted
 *       404:
 *         description: Cart not found
 */
router.delete("/:id", deleteCart);

module.exports = router;