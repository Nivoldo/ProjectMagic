const mongoose = require('mongoose');

//course schema

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
    },
    descripition:{
        type: String,
        trim: true,
        required: true,
    },
    creator:{
        type: String,
        required: true,
    },
    modules:{
        type: [String],
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    totalTime:{
        type: Number,
        required: true
    },
    thumb:{
        type: String,
        required: true,
    }
},{timestamps: true})

module.exports = mongoose.model('Course', courseSchema);    