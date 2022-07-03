const { movies } = require("../models/Movie.model") // duda de que hace
const Movie = require("../models/Movie.model")

module.exports.list = (req, res, next) => {
    Movie.find(req.query).then((movies) => {  //repasar, y ver como hacer para que solo entren algunos valores, creo que es con las querys de mongo
        console.log(movies)
        res.render("movies", {movies});
    });
};


module.exports.details = (req, res, next) => {
    // en el query params le estamos pasando por valor 'details' del enlace, que basicamente esta obteniendo el id de este objeto
    // por eso nos devuelve un resultado de la busqueda con los detalles completos de dicho objeto
    Movie.findById(req.params.details).then((movie) => {
        // asi podemos ver los valores que nos dan
        // movies viene siendo el objeto conseguido por el metodd findByID..
        // req.params nos devuelve un listado de claves y valores que viajen en la URL... -details: 'numeroDelID'
        // al agregar el -detail- en el req.param entrammos a su valor y obtenemos el ID deseado 
        console.log('hola', movie, req.params.details) 
        res.render("details", {movie});
    });
};
