const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate()),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type is required.",
      },
      name: {
        type: String,
        trim: true,
        required: "Name is required.",
      },
      duration: {
        type: Number,
        required: true,
      },
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
