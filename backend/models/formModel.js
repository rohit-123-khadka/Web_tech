const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
  {
    fulltName: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    selectedProgram: {
      type: String,
    },
  },
  { timeStamps: true },
);


module.exports = mongoose.model("Form", formSchema)