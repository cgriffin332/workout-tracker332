const { Router } = require("express");
const express = require("express");
const router = express.Router();

const db = require("../models");

// find all workouts route
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((foundWorkouts) => {
        res.json(foundWorkouts);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to retrieve workouts.",
        });
      });
  });


module.exports = router;