const mongoose = require('mongoose');

//lesson schema

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
    },description:{
        type: String,
        trim: true,
        required: true,
    },
    creator:{
        type:String,
        required: true,
    },
    urlVimeo:{
        type:String,
        required:true,
    },
    urlMaterial:{
        type:String,
        required:true,
    }
},{timestamps: true})

module.exports = mongoose.model('Lesson', courseSchema);