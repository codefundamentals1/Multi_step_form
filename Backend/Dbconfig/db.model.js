const { default: mongoose } = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max: 120,
    },
    phoneNo: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    plan: {
      type: String,
      required: true,
    },
    agree: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, 
  }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
