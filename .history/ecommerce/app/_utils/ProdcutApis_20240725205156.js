const { default: dataFetching } = require("./dataFetching");

const getLatestProducts = () => dataFetching.get("/products?=populate=*");

export default {
  getLatestProducts,
};
