const mongoose = require('mongoose');

//event schema

const courseSchema = new mongoose.Schema({
    content:{
        type: String,
        trim: true,
        required: true,
    },date:{
        type: String,
        trim: true,
        required: true,
    },
    time:{
        type:String,
        required: true,
    },
    agendaID:{
        type:String,
        required:true,
    }
},{timestamps: true})

module.exports = mongoose.model('Event', courseSchema);