
const express = require("express");
const router = express.Router();

const {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customer.controller");

const {
  createCustomerSchema,
  updateCustomerSchema,
} = require("../validations/customer.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customer CRUD API
 */

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Yangi customer yaratish
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Customer yaratildi
 *       400:
 *         description: Validatsiya xatosi
 */
router.post("/", validate(createCustomerSchema), createCustomer);

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Barcha customerlarni olish
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Customerlar ro'yxati
 */
router.get("/", getAllCustomers);

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: ID orqali customer olish
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer topildi
 *       404:
 *         description: Customer topilmadi
 */
router.get("/:id", getCustomerById);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Customer ma'lumotlarini yangilash
 *     tags: [Customers]
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
 *               first_name:
 *                 type: string
 *                 example: Ali
 *               last_name:
 *                 type: string
 *                 example: Valiyev
 *               phone:
 *                 type: string
 *                 example: "+998901234567"
 *               email:
 *                 type: string
 *                 example: ali@gmail.com
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Customer yangilandi
 *       400:
 *         description: Validatsiya xatosi
 *       404:
 *         description: Customer topilmadi
 */
router.put("/:id", validate(updateCustomerSchema), updateCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Customerni o'chirish
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer o'chirildi
 *       404:
 *         description: Customer topilmadi
 */
router.delete("/:id", deleteCustomer);

module.exports = router;