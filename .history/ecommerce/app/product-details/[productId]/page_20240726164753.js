"use client";
import ProdcutApis from "@/app/_utils/ProdcutApis";
import React, { useEffect } from "react";
import ProductImage from "../_Components/ProductImage";
import ProductInfo from "../_Components/ProductInfo";

function ProductDetails({ params }) {
  useEffect(() => {
    getProductById_();
  }, []);
  const getProductById_ = () => {
    ProdcutApis.getProductById(params?.productId).then((res) => {
      console.log(res.data.data);
    });
  };
  return (
    <div className="container pt-3">
      <ProductImage />
      <ProductInfo />
    </div>
  );
}

export default ProductDetails;
