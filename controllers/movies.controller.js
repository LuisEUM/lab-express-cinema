const { movies } = require("../models/Movie.model") // duda de que hace
const Movie = require("../models/Movie.model")

module.exports.list = (req, res, next) => {
    Movie.find(req.query).then((movies) => {  //repasar, y ver como hacer para que solo entren algunos valores, creo que es con las querys de mongo
        console.log(movies)
    res.render("movies", {movies});
  });
};
