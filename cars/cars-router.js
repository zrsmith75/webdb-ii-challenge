const express = require("express");
const knex = require("knex");

const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json({
        message: "Unable to GET cars"
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("cars")
    .where({ id })
    .first()
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json({
        message: "Unable to GET your car by id"
      });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;

  db("cars")
    .insert(carData)
    .then(newCar => {
      res.status(201).json(newCar);
    })
    .catch(error => {
      res.status(500).json({
        message: "Unable to POST your new car"
      });
    });
});

module.exports = router;
