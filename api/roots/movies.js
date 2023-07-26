const path = require("path");
const router = require("express").Router();
const Movie = require("../models/Movies");
const multer = require("multer");
const fs = require("fs");



const storage =multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'uploads');
  },
  filename:(req,file,cb)=>{
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload =multer({storage:storage})
//Create Movie
router.post('/post', upload.fields([
  { name: 'photo1', maxCount: 1 },
  { name: 'photo2', maxCount: 1 },
]), (req, res) => {
  // Extract the form data from the request body
  const { moviename, languages, genere, decs, cities,featured } = req.body;
  const { photo1, photo2 } = req.files;

  // Create a new movie instance
  const newMovie = new Movie({
    moviename,
    languages,
    genere,
    decs,
    cities,
    featured,
    photo1:`http://localhost:5000/moviesimg/${photo1[0].filename}`,
    photo2:`http://localhost:5000/moviesimg/${photo2[0].filename}`
   
  });

  // Save the movie to the database
  newMovie.save()
    .then(savedMovie => {
      res.status(200).json(savedMovie);
    })
    .catch(error => {
      console.error('error reading or saving file',error);
      res.status(500).json({ error: 'Error saving movie' });
    });
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
router.get("/:moviename", async (req,res) =>{
  const movien=req.params.moviename;
  try{
    const movie= await Movie.findOne(
      {
      moviename: movien,
      }
      );
      res.status(200).json(movie);
  }
  catch(err){
    res.status(500).json(err);
  }
});
//Get Movie
router.get("/", async (req, res) => {
    try {
      const movie = await Movie.find();
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