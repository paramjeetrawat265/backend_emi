const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
})
const UserModel = mongoose.model("users", userSchema);

module.exports = {
    UserModel
}