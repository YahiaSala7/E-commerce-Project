const { default: dataFetching } = require("./dataFetching");

const addToCart = (payload) => dataFetching.post("/carts", payload);
const getUserCartItems = (email) =>
  dataFetching.get(
    `carts?populate[products][populate]=image&filters[email][$eq]=${email}`
  );
const deleteCartItem = (id) => dataFetching.delete(`/carts/${id}`);

export default { addToCart, getUserCartItems, deleteCartItem };
