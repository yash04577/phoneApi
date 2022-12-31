require("dotenv").config();
const mongoose = require("mongoose") 
const connection_string = "mongodb+srv://yash04577:4577@cluster0.tp2ucob.mongodb.net/?retryWrites=true&w=majority"

mongoose.set("strictQuery", false);

const connectDB = () => {

    return mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};

module.exports = connectDB;