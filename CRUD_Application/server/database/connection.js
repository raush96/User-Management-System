const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        //console.log("first aaya")
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        //console.log("second aaya")
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        //console.log("err aaya")
        process.exit(1);
    }
}

module.exports = connectDB


// const mongoose=require("mongoose");

// mongoose.set("strictQuery", false);
// mongoose.connect("mongodb://localhost:27017/students-api",{
//     useNewUrlParser:true,
// }).then(()=>{
//     console.log("database connection successfull!!!")
// }).catch((error)=>{
//     console.log(error)
// })