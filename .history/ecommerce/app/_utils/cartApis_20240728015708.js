const { default: dataFetching } = require("./dataFetching");

const addToCart = (payload) => dataFetching.post("/carts", payload);

export default { addToCart };
