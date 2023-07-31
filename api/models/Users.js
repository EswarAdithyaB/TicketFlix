const Ticket = require("./Ticket");
const mongoose =require("mongoose");
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    ticket: {
        type: [Schema.Types.ObjectId],
        ref: Ticket,
    }
   },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);