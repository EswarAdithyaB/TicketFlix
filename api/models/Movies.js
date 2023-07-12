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
    photo1:{
        type: String,
        require: false,
    },
    photo2:{
        type: String,
        require: false,
    },
   },
);

module.exports = mongoose.model("Movie", MovieSchema);