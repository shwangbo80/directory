const mongoose = require("mongoose")
const moment = require("moment")

const MemberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    registered_date: {
        type: String,
    },
    title: {
        type: String,
    },
    updated_date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = Book = mongoose.model("member", MemberSchema)
