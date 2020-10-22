const { Router } = require("express");
const express = require("express");
const router = express.Router();
const path = require("path");

const db = require("../models");


//API ROUTES
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
//find one workout route
router.get("/api/workouts/:id", (req, res) => {
  db.Workout.findById(req.params.id)
    .then((foundWorkout) => {
      res.json(foundWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: `Failed to retrieve workout with id: ${req.params.id}`,
      });
    });
});
// add one workout route
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to create new workout.",
      });
    });
});
// update one workout route
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedWorkout) => {
      res.json(updatedWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to update workout.",
      });
    });
});
// delete one workout route
router.delete("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id)
    .then((deletedWorkout) => {
      res.json(deletedWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to delete workout.",
      });
    });
});

//export router
module.exports = router;
