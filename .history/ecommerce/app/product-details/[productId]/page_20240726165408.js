"use client";
import ProdcutApis from "@/app/_utils/ProdcutApis";
import React, { useEffect } from "react";
import ProductImage from "../_Components/ProductImage";
import ProductInfo from "../_Components/ProductInfo";
import BreadCrumb from "@/app/_Components/BreadCrumb";

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
      <BreadCrumb />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-0">
        <ProductImage />
        <ProductInfo />
      </div>
    </div>
  );
}

export default ProductDetails;
