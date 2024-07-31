import React from "react";
import ProdcutApis from "../_utils/ProdcutApis";

function LatestProducts() {
  const getLatestProducts_ = () => {
    ProdcutApis.getLatestProducts().then((res) => {
      console.log(res.data);
    });
  };
  return <div>LatestProducts</div>;
}

export default LatestProducts;
