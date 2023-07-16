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
    genere: {
        type: Array,
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
        type: String,
        required: true,
    },
    photo2:{
        type: String,
        required: true,
    },
   },
);

module.exports = mongoose.model("Movie", MovieSchema);