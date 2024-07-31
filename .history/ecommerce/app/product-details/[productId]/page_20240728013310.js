"use client";
// import ProdcutApis from "@/app/_utils/ProdcutApis";
import React, { useEffect, useState } from "react";
import ProductImage from "../_Components/ProductImage";
import ProductInfo from "../_Components/ProductInfo";
import BreadCrumb from "@/app/_Components/BreadCrumb";
import SimilarProducts from "../_Components/SimilarProducts";
import { usePathname } from "next/navigation";

function ProductDetails({ params }) {
  const path = usePathname();
  const [productInfo, setProductInfo] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    getProductById_();
    getProductByCategory_();
  }, []);
  const getProductById_ = () => {
    ProdcutApis.getProductById(params?.productId).then((res) => {
      setProductInfo(res.data.data);
    });
  };
  const getProductByCategory_ = () => {
    ProdcutApis.getProductByCategory(productInfo?.attributes?.Category).then(
      (res) => {
        console.log(res.data.data);
        setSimilarProducts(res.data.data);
      }
    );
  };
  return (
    <div className="container pt-10">
      <BreadCrumb path={path} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-0">
        <ProductImage productInfo={productInfo} />
        <ProductInfo productInfo={productInfo} />
      </div>
      <div className="py-10">
        <h2 className="text-[14px] sm:text-[20px] md:text-[24px] xs:text-[18px] mb-4">
          Similar Products
        </h2>
        <SimilarProducts similarProducts={similarProducts} />
      </div>
    </div>
  );
}

export default ProductDetails;
