"use client";
import React, { useEffect, useState } from "react";
import ProdcutApis from "../_utils/ProdcutApis";
import ProductItem from "./ProductItem";

function LatestProducts() {
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    ProdcutApis.getLatestProducts().then((res) => {
      setLatestProducts(res.data.data);
    });
  };

  return (
    <div>
      {latestProducts.map((item) => {
        <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
}

export default LatestProducts;
