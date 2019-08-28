const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");

const carsRouter = require("../cars/cars-router.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger("dev"));
server.use("/api/cars", carsRouter);

module.exports = server;
