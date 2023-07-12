const router = require("express").Router();
const Theater = require("../models/Theaters");
//post
router.post("/post", async (req, res) => {
    const newTheater =new Theater(req.body);
    try{
        const savedTheater = await newTheater.save();
        res.status(200).json(savedTheater);
    }catch(err){
        res.status(500).json(err);
    }
});

//get Theaters
router.get("/:city/:movie",async (req, res) => {
    const city=req.params.city;
    const movie = req.params.movie;
    try{
        const theater = await Theater.find(
        {
          cityname: city,
          movieName: movie,
        }
      );
        res.status(200).json(theater);
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