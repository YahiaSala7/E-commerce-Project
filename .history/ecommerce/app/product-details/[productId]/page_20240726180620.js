"use client";
import ProdcutApis from "@/app/_utils/ProdcutApis";
import React, { useEffect, useState } from "react";
import ProductImage from "../_Components/ProductImage";
import ProductInfo from "../_Components/ProductInfo";
import BreadCrumb from "@/app/_Components/BreadCrumb";

function ProductDetails({ params }) {
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    getProductById_();
  }, []);
  const getProductById_ = () => {
    ProdcutApis.getProductById(params?.productId).then((res) => {
      console.log(res.data.data);
      setProductInfo(res.data.data);
    });
  };
  // const getProductByCategory_ = () => {
  //   ProdcutApis.getProductByCategory(productInfo?.attributes?.Category).then((res) => {
  //     console.log(res.data.data);
  //     setProductInfo(res.data.data);
  //   });
  // };
  return (
    <div className="container pt-10">
      <BreadCrumb />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-0">
        <ProductImage productInfo={productInfo} />
        <ProductInfo productInfo={productInfo} />
      </div>
    </div>
  );
}

export default ProductDetails;
