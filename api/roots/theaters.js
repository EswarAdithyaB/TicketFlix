
const moment = require("moment");
const mongoose = require('mongoose');
const router = require("express").Router();
const Theater = require("../models/Theaters");
const Seates =require("../models/Seates");
//post
router.post("/post/Theater", async (req, res) => {
    const {Theatername,languages,movieName,screenNumber,cityName,date}=req.body;
    const da = new Date(date);
    const newTheater =new Theater({
      _id: new mongoose.Types.ObjectId(),
      Theatername,
      languages,
      movieName,
      screenNumber,
      cityName,
      date: da
});
    try{
        const savedTheater = await newTheater.save();
        res.status(200).json(savedTheater);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/post/shows", async (req, res) =>{
  const {seates, showtime, language, typeofScreen, Theatername, cityName, date}= req.body;
  const da = new Date(date);
  const newShow = new Seates({
  _id: new mongoose.Types.ObjectId(),
  seates,
    showtime,
    language,
    typeofScreen,
  });
  try{
    const shows = await newShow.save();
    res.status(200).json(shows); 
  }catch(err){
    console.log(err);
    res.status(500).json(err);
}
try {
  const theater = await Theater.findOne({ 
    Theatername: Theatername,
    cityName: cityName,
    date: da,
  });

  if (theater) {
    if (!theater.shows) {
      theater.shows = [newShow._id]; // Initialize as an empty array if it doesn't exist
    }
    else{
    theater.shows.push(newShow._id);
    }
    await theater.save();
    console.log("Show added to theater successfully!");
  } else {
    console.log("Theater not found!");
  }
} catch (error) {
  console.error("Error adding show to theater:", error);
}
});

router.get("/:movie",async(req,res) =>{
  const movie=req.params.movie;
  const city=req.query.city;
  console.log(req.query.date);
  console.log(req.query.city);
  
  const da= new Date(req.query.date);
  try{
    const theaters = await Theater.find(
    {
      movieName: movie,
      cityName: city,
      date: da,
    }
  ).populate('shows');
    
    res.status(200).json(theaters);
}catch(err){
    res.status(500).json(err);
}
});


router.get("/seates/:id",async(req,res) =>{
  try{
    const theaters = await Theater.findById(req.params.id);
    res.status(200).json(theaters);
}catch(err){
    res.status(500).json(err);
}
});

//get Seates
router.get("/theater/:name/:show",async (req, res) => {
    const show = req.params.show;
    const name = req.params.name;
    try {
      const theater = await Theater.findOne({ Theatername: name });
      if (!theater) {
        return res.status(404).json({ error: "Theater not found" });
      }
  
      const showInfo = theater.shows.find((showObj) => showObj.showtime === show);
      if (!showInfo) {
        return res.status(404).json({ error: "Show not found" });
      }
  
      const { seates, ...others } = showInfo;
      res.status(200).json(seates);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;