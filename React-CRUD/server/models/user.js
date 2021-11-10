const mongoose = require("mongoose");
const autoIncrement = require ("mongoose-auto-increment")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
        minlength: [2, "Too short"],
        maxlength: [32, "Too long"],
      },
      lname: {
        type: String,
        required: "Last Name is required",
        minlength: [2, "Too short"],
        maxlength: [32, "Too long"],
      },
      email: {
        type: String,
        required: "Email is required",
        minlength: [2, "Too short"],
        maxlength: [32, "Too long"],
      },
      phone: {
        type: String,
        required: "Phone is required",
        minlength: [10, "Too short"],
        maxlength: [12, "Too long"],
      },
      role: {
        type: String,
        required: "Role is required",
        minlength: [2, "Too short"],
        maxlength: [32, "Too long"],
      },
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

module.exports = mongoose.model("user", userSchema);
