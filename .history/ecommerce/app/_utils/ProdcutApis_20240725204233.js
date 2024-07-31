const { default: dataFetching } = require("./dataFetching");

const getLatestProducts = dataFetching.get("/products");
