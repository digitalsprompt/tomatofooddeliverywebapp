import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://digitalsprompt:Computerss22@food-del.v0fvsgr.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.