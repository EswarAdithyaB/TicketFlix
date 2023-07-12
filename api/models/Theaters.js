const mongoose =require("mongoose");
const SeatesSchema = new mongoose.Schema({
    seates: {
        type: Array,
        require: true,
    },
    showtime:{
        type: String,
        require: true,
    },
    language:{
        type: String,
        require: true,
    },
    typeofScreen:{
        type: String,
        require:true,
    }
   },
);

const TheatersSchema = new mongoose.Schema({
    Theatername:{
        type:String,
        required:true,
        unique:true,
    },
    shows:{
        type:[SeatesSchema],
        required:true,
    },
    cityname:{
        type:String,
        required:true,
    },
    movieName:{
        type:String,
        required:true,
    },
    screenNumber:{
        type:String,
        required:false,
    }
   },
);

module.exports = mongoose.model("Theater", TheatersSchema);