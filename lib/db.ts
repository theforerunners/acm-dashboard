import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGODB_URI as string;

if (!MONGO_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

// Module-level cache instead of global
let cachedConnection: Mongoose | null = null;

async function dbConnect(): Promise<Mongoose> {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    console.log("Connecting to MongoDB...");
    cachedConnection = await mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    });
    console.log("MongoDB connected");
    return cachedConnection;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    cachedConnection = null;
    throw new Error("Failed to connect to MongoDB");
  }
}

export default dbConnect;
