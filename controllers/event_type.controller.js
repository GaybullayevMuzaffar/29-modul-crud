const EventType = require("../models/event_type.model");

const createEventType = async (req, res) => {
  try {
    const eventType = await EventType.create(req.body);

    res.status(201).json({
      message: "Event type created successfully",
      eventType,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllEventTypes = async (req, res) => {
  try {
    const eventTypes = await EventType.findAll();

    res.status(200).json(eventTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEventTypeById = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);

    if (!eventType) {
      return res.status(404).json({
        message: "Event type not found",
      });
    }

    res.status(200).json(eventType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEventType = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);

    if (!eventType) {
      return res.status(404).json({
        message: "Event type not found",
      });
    }

    await eventType.update(req.body);

    res.status(200).json({
      message: "Event type updated successfully",
      eventType,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEventType = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);

    if (!eventType) {
      return res.status(404).json({
        message: "Event type not found",
      });
    }

    await eventType.destroy();

    res.status(200).json({
      message: "Event type deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEventType,
  getAllEventTypes,
  getEventTypeById,
  updateEventType,
  deleteEventType,
};