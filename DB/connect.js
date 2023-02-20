require("dotenv").config();
const mongoose = require("mongoose") 
mongoose.set("strictQuery", false);

const connectDB = () => {

    return mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};

module.exports = connectDB;