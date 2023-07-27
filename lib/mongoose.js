import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
export async function mongooseConnect() {
    if (mongoose.connections[0].readyState) {
      return mongoose.connection.asPromise();
    } else {
      return mongoose.connect(uri);
    }
}