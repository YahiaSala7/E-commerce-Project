"use client";
import React, { useEffect } from "react";

function ProductDetails({ params }) {
  useEffect(() => {
    getProductById_();
  }, []);
  const getProductById_ = () => {
    getProductById;
  };
  return <div>{params?.productId}</div>;
}

export default ProductDetails;
