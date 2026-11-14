const express = require("express");
const router = express.Router();

const {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admin.controller");

const {
  createAdminSchema,
  updateAdminSchema,
} = require("../validations/admin.validation");

const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: Admin CRUD API
 */

/**
 * @swagger
 * /api/admins:
 *   post:
 *     summary: Yangi admin yaratish
 *     tags: [Admins]
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
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin yaratildi
 *       400:
 *         description: Validatsiya xatosi
 */
router.post("/", validate(createAdminSchema), createAdmin);

/**
 * @swagger
 * /api/admins:
 *   get:
 *     summary: Barcha adminlarni olish
 *     tags: [Admins]
 *     responses:
 *       200:
 *         description: Adminlar ro'yxati
 */
router.get("/", getAllAdmins);

/**
 * @swagger
 * /api/admins/{id}:
 *   get:
 *     summary: ID orqali admin olish
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Admin topildi
 *       404:
 *         description: Admin topilmadi
 */
router.get("/:id", getAdminById);

/**
 * @swagger
 * /api/admins/{id}:
 *   put:
 *     summary: Admin ma'lumotlarini yangilash
 *     tags: [Admins]
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
 *               login:
 *                 type: string
 *                 example: ali123
 *               hashed_password:
 *                 type: string
 *                 example: newpassword123
 *     responses:
 *       200:
 *         description: Admin yangilandi
 *       400:
 *         description: Validatsiya xatosi
 *       404:
 *         description: Admin topilmadi
 */
router.put("/:id", validate(updateAdminSchema), updateAdmin);

/**
 * @swagger
 * /api/admins/{id}:
 *   delete:
 *     summary: Adminni o'chirish
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Admin o'chirildi
 *       404:
 *         description: Admin topilmadi
 */
router.delete("/:id", deleteAdmin);

module.exports = router;