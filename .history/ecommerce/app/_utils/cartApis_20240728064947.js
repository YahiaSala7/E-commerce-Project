const { default: dataFetching } = require("./dataFetching");

const addToCart = (payload) => dataFetching.post("/carts", payload);
const getUserCartItems = (email) =>
  dataFetching.get(
    `carts?populate[products][populate]=imgae&filters[email][$eq]=${email}`
  );

export default { addToCart, getUserCartItems };
