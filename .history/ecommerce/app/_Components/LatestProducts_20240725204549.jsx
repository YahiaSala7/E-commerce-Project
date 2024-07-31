"use Client";
import React, { useEffect } from "react";
import ProdcutApis from "../_utils/ProdcutApis";

function LatestProducts() {
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    ProdcutApis.getLatestProducts().then((res) => {
      console.log(res.data);
    });
  };
  return <div>LatestProducts</div>;
}

export default LatestProducts;
