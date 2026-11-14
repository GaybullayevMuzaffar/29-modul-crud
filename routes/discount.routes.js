
const router = require("express").Router();

const {
  createDiscount,
  getAllDiscounts,
  getDiscountById,
  updateDiscount,
  deleteDiscount,
} = require("../controllers/discount.controller");

const {
  createDiscountSchema,
  updateDiscountSchema,
} = require("../validations/discount.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Discounts
 *   description: Discount management
 */

/**
 * @swagger
 * /api/discounts:
 *   post:
 *     summary: Create a discount
 *     tags: [Discounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               percentage:
 *                 type: number
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Discount created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createDiscountSchema), createDiscount);

/**
 * @swagger
 * /api/discounts:
 *   get:
 *     summary: Get all discounts
 *     tags: [Discounts]
 *     responses:
 *       200:
 *         description: List of discounts
 */
router.get("/", getAllDiscounts);

/**
 * @swagger
 * /api/discounts/{id}:
 *   get:
 *     summary: Get a discount by ID
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Discount found
 *       404:
 *         description: Discount not found
 */
router.get("/:id", getDiscountById);

/**
 * @swagger
 * /api/discounts/{id}:
 *   put:
 *     summary: Update a discount
 *     tags: [Discounts]
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
 *                 example: Summer Sale
 *               percentage:
 *                 type: number
 *                 example: 15
 *               start_date:
 *                 type: string
 *                 format: date
 *                 example: "2026-06-01"
 *               end_date:
 *                 type: string
 *                 format: date
 *                 example: "2026-06-30"
 *     responses:
 *       200:
 *         description: Discount updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Discount not found
 */
router.put("/:id", validate(updateDiscountSchema), updateDiscount);

/**
 * @swagger
 * /api/discounts/{id}:
 *   delete:
 *     summary: Delete a discount
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Discount deleted
 *       404:
 *         description: Discount not found
 */
router.delete("/:id", deleteDiscount);

module.exports = router;