const { default: dataFetching } = require("./dataFetching");

const addToCart = (payload) => dataFetching.post("/carts", payload);
const getUserCartItems = (email) =>
  dataFetching.get(
    `carts?populate[products][populate]=image&filters[email][$eq]=${email}`
  );

export default { addToCart, getUserCartItems };
