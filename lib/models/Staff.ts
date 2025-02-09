import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  sno: Number,
  name: {
    type: String,
    required: true,
  },
  mid: {
    type: String,
    required: true,
  },
});

export const Staff =
  mongoose.models.Staff || mongoose.model("Staff", StaffSchema, "staff");
