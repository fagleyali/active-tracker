const mongoose = require('mongoose');

const Schema = mongoose.Schema

const patientSchema = new Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    
})
