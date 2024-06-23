import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://vikas:vikas1203@cluster0.wrqbzzw.mongodb.net/food-order`).then(()=>console.log("DB connected"));
}