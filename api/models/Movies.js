const mongoose =require("mongoose");

const MovieSchema = new mongoose.Schema({
    moviename:{
        type:String,
        required:true,
        unique:true,
    },
    languages: {
        type: Array,
        require: false,
    },
    gener: {
        type: String,
        require: true,
    },
    decs:{
        type: String,
        required: true,
    },
    cities:{
        type: Array,
        required: true,
    },
    featured:{
        type: Boolean,
        required: true,
    },
    photo1:{
        data: Buffer,
        contentType:String
    },
    photo2:{
        data: Buffer,
        contentType:String
    },
   },
);

module.exports = mongoose.model("Movie", MovieSchema);