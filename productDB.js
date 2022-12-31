const connectDB = require("./DB/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");

const start = async () => {
    try{
        await connectDB();
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("sucess");
    }
    catch(err){
        console.log(err);
    }
}

start();