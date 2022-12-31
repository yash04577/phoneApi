require("dotenv").config();
const express = require("express")
const app = express();
const connectDB = require("./DB/connect");
const products_route = require("./routes/products");


const PORT = process.env.PORT || 8000


app.get("/", (req, res) => {
    res.send("home page");
})

app.use("/api/products", products_route)


const start = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`app is listing at ${PORT}`);
        })
    }
    catch (err) {
        console.log(err);
    }
}

start();