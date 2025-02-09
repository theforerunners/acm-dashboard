import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mid: {
    type: String,
    required: true,
  },
  st_yr: {
    type: Number,
    required: true,
  },
  end_yr: {
    type: Number,
    required: true,
  },
});

export const Student =
  mongoose.models.Student ||
  mongoose.model("Student", StudentSchema, "student");
