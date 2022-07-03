const express = require('express');
const router = express.Router();
const misc = require("../controllers/misc.controller");
const movies = require("../controllers/movies.controller");

// Routes here
router.get('/', misc.home)
router.get('/movies', movies.list)
router.get('/movies/:details', movies.details)

module.exports = router;
