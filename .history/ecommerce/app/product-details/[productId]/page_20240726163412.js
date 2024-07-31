"use client";
import ProdcutApis from "@/app/_utils/ProdcutApis";
import React, { useEffect } from "react";

function ProductDetails({ params }) {
  useEffect(() => {
    getProductById_();
  }, []);
  const getProductById_ = () => {
    ProdcutApis.getProductById().then((res) => {
      console.log(res.data.data);
    });
  };
  return <div>{params?.productId}</div>;
}

export default ProductDetails;
