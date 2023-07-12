const router = require("express").Router();
const Movie = require("../models/Movies");

//Create Movie
router.post("/post", async (req, res) => {
    const newMovie =new Movie(req.body);
    try{
        const savedMovie = await newMovie.save();
        res.status(200).json(savedMovie);
    }catch(err){
        res.status(500).json(err);
    }
});

// Delete Movie
router.delete("/:id",async (req,res) =>{
    try{
        const movies =await Movie.findById(req.params.id);
        try{
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie deleted succesfully");
        }catch(err){
            res.status(550).json(err);
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//Get Movie
router.get("/:id", async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/cities/:city", async (req,res) => {
    const city=req.params.city;
    const lang = req.params.Lang;
    try{
        const movies = await Movie.find(
        {
          cities: { $regex: city, $options: 'i' },
        }
      );
        res.status(200).json(movies);
    }catch(err){
        res.status(500).json(err);
    }
})
router.get("/cities/:city/:Lang", async (req,res) => {
    const city=req.params.city;
    const lang = req.params.Lang;
    try{
        const movies = await Movie.find(
        {
          cities: { $regex: city, $options: 'i' },
          languages: { $regex: lang, $options: 'i' },
        }
      );
        res.status(200).json(movies);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;