const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = Schema({
  firstName: {
    type: String,
    required: [true, "full name is required"],
  },
  lastName: { type: String, required: [true, "last name is required"] },
  userName: {
    type: String,
    required: [true, "user name is required"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "phone number is required"],
    unique: true,
  },
  email: { type: String, required: [true, "email is required"], unique: true },
  country: { type: String, required: [true, "country is required"] },
  state: { type: String, required: [true, "state is required"] },
  city: { type: String, required: [true, "city is required"] },
  zipCode: { type: Number, required: [true, "zip code is required"] },
  dob: { type: Date, required: [true, "date of birth is required"] },
  createdAt: { type: Date, default: Date.now },
});
module.exports = model("User", userSchema);
