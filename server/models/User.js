const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    logTimestamp: { type: Date, default: Date.now },

},
// {   
//     timestamps: true,
//     get: v => v.toDateString()
// }
);

module.exports = mongoose.model("User", User);