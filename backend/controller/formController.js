const Form = require("../models/formModel");

const createForm = async (req, res) => {
  const { fullName, email, phoneNumber, selectedProgram } = req.body;
  try {
    if (!fullName || !email || !phoneNumber || !selectedProgram) {
      return res.status(400).json({
        succss: false,
        message: "All Fields are required",
      });
    }

    const existingEmail = await Form.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).json({
        succss: false,
        message: "This email already exist",
      });
    }

    const newForm = new Form({
      fullName,
      email,
      phoneNumber,
      selectedProgram,
    });

    await newForm.save();

    return res.status(200).json({
      succss: true,
      message: "New Form Submitted successfully",
      newForm,
    });
  } catch (error) {
    return res.status(400).json({
      succss: false,
      message: `error while creating form is ${error}`,
    });
  }
};

module.exports = {
  createForm,
};
