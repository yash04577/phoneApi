const dbProduct = require("../models/product");

const getAllProducts = async (req, res) => {

    const data = await dbProduct.find({});
    res.status(200).json(data);
}

const getAllProductsTesting = async (req, res) => {

    console.log(req.query);

    const queryObject = {};

    const { company, name, price, feature, rating, sort, select} = req.query;

    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    if (price) {
        queryObject.price = price;
    }
    if (feature) {
        queryObject.feature = feature;
    }
    if (rating) {
        queryObject.rating = rating;
    }

    if(select){

        const selectFix = select.split(",").join(" ");

        if (sort) {

            const sortfix = sort.split(",").join(" ");
            const data = await dbProduct.find(queryObject).sort(sortfix).select(selectFix);
            res.status(200).json(data);
        }

        else {
            const data = await dbProduct.find(queryObject).select(selectFix);
            res.status(200).json(data);
        }
    }

    else{

        if (sort) {

            const sortfix = sort.split(",").join(" ");
            const data = await dbProduct.find(queryObject).sort(sortfix);
            res.status(200).json(data);
        }

        else {
            const data = await dbProduct.find(queryObject);
            res.status(200).json(data);
        }

    }


   

   


}

module.exports = { getAllProducts, getAllProductsTesting };