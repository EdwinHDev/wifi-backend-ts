import mongoose from "mongoose"

export const dbConnection = async () => {

  const mongo_uri = process.env.MONGO_URI ?? ""

  try {
    const connection = await mongoose.connect(mongo_uri)

    if (connection) {
      console.log("Database connected")
    }
  } catch (error) {
    console.log(error)
  }
}

export const dbDisconnect = async () => {
  await mongoose.disconnect()
}