const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: true
    },
    phone_number: Number,
    email_address: String,
    level_of_education: String,
    location: String,
    interest: String
})

module.exports("user", userSchema);