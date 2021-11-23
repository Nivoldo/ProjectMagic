const mongoose = require('mongoose');

//lesson schema

const lessonSchema = new mongoose.Schema({
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
    course:{
        type: String,
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
    },
    students:{
        type: String,
    },
    lessons:{
        type: [String],
    }
},{timestamps: true})

module.exports = mongoose.model('Lesson', lessonSchema);    