import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected')
    } catch (error) {
        console.log('Error while connecting to database', error.message)
    }
}
export default DBConnection