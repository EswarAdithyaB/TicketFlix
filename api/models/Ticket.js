const mongoose =require("mongoose");

const TicketSchema = new mongoose.Schema({
    moviename:{
        type:String,
        require:true,
    },
    date: {
      type: Date,
      require: true,
    },
    showtime:{
        type: String,
        require: true,
    },
    seates: {
        type: [String],
    },   
    language:{
        type: String,
        require: true,
    },
    typeofScreen:{
        type: String,
        require:true,
    },
    price:{
        type: Number,
    },
    photo:{
        type: String,
    }
},
);
module.exports = mongoose.model("Ticket",TicketSchema);