const { default: dataFetching } = require("./dataFetching");

const getLatestProducts = () => dataFetching.get("/products?populate=*");
const getProductById = (id) => dataFetching.get(`/products/${id}?populate=*`);
// const getProductByCategory = (category) =>
//   dataFetching.get(`/products?filters[category][$eq]=${category}&populate=*`);
const getProductByCategory = (category) =>
  dataFetching.get(`/products?filters[category][$ne]=${category}`);
export default {
  getLatestProducts,
  getProductById,
  getProductByCategory,
};
