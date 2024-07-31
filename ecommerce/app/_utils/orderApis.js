const { default: dataFetching } = require("./dataFetching");

const createOrder = (data) => dataFetching.post("/orders", data);

export default {
  createOrder,
};
