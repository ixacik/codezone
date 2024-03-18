import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

type MongooseConnection = {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (!MONGO_URI) {
    return console.log("No mongo URI found");
  }

  if (cached.conn) return cached.conn;

  cached.promise = cached.promise || mongoose.connect(MONGO_URI);
  cached.conn = await cached.promise;

  return cached.conn;
};
