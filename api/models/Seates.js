const mongoose =require("mongoose");
const { Schema } = mongoose;
const SeatesSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
    seates: {
        type: [String],
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
    },
    screenNo:{
        type: Number,
        require:true
    }
   },
);
module.exports = mongoose.model("Seates", SeatesSchema);