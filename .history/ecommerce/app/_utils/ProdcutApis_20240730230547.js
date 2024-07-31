const { default: dataFetching } = require("./dataFetching");

const getLatestProducts = () => dataFetching.get("/products?populate=*");
const getProductById = (id) => dataFetching.get(`/products/${id}?populate=*`);
const getProductByCategory = (category) =>
  dataFetching.get(`/products?filters[Category][$eq]=${category}&populate=*`);
export default {
  getLatestProducts,
  getProductById,
  getProductByCategory,
};
