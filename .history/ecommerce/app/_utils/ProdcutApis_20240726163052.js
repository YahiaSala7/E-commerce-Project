const { default: dataFetching } = require("./dataFetching");

const getLatestProducts = () => dataFetching.get("/products?populate=*");
const getProductById = (id) => dataFetching.get(`/products/${id}?populate=*`);
export default {
  getLatestProducts,
  getProductById,
};
