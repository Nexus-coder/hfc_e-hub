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
    phone_number:{
        type: Number,
        required: true,
        unique: true
    },
    email_address: {
        type: String,
        required: true,
        unique: true
    },
    level_of_education: {
        type:String,
        required:true
    },
    location: String,
    interest: String
})

module.exports = mongoose.model("user", userSchema);