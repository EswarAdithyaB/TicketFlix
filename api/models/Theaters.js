const mongoose = require('mongoose');
const { Schema } = mongoose;

const Seates = require("./Seates"); // Corrected the import path

const TheatersSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  Theatername: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  shows: [{
    type: Schema.Types.ObjectId,
    ref: Seates, // Reference to the "Seates" model
  }],
  movieName: {
    type: String,
    required: true,
  },
  screenNumber: {
    type: String,
    required: false,
  },
  cityName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model("Theater", TheatersSchema);
