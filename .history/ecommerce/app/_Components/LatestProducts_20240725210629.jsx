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
      console.log(res.data.data);
      setLatestProducts(res.data.data);
    });
  };
  return (
    <div>
      {latestProducts?.map((product) => {
        <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default LatestProducts;
