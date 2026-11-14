const Admin = require("../models/admin.model");

// CREATE
const createAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);

    res.status(201).json({
      message: "Admin created successfully",
      data: {
        id: admin.id,
        name: admin.name,
        login: admin.login,
        is_active: admin.is_active,
        is_creator: admin.is_creator,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll({
      attributes: { exclude: ["hashed_password", "hashed_refresh_token"] },
    });

    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id, {
      attributes: {
        exclude: ["hashed_password", "hashed_refresh_token"],
      },
    });

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    await admin.update(req.body);

    res.status(200).json({
      message: "Admin updated successfully",
      data: {
        id: admin.id,
        name: admin.name,
        login: admin.login,
        is_active: admin.is_active,
        is_creator: admin.is_creator,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    await admin.destroy();

    res.status(200).json({
      message: "Admin deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};