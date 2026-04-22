const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      message: "Contact submitted successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error submitting contact",
      error: error.message,
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching contacts",
      error: error.message,
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting contact",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
};