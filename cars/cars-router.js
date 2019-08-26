const express = require("express");
const knex = require("knex");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "../data/cars.db3"
  },
  useNullAsDefault: true
});

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
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCar => {
          res.status(200).json({ newCar });
        });
    })
    .catch(error => {
      console.log("POST error", error);
      res.status(500).json({
        message: "Unable to POST your car data"
      });
    });
});

module.exports = router;
