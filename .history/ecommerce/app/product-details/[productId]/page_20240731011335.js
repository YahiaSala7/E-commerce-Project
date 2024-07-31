"use client";
// import ProdcutApis from "@/app/_utils/ProdcutApis";
import React, { useEffect, useState } from "react";
import ProductImage from "../_Components/ProductImage";
import ProductInfo from "../_Components/ProductInfo";
// import BreadCrumb from "@/app/_Components/BreadCrumb";
import BreadCrumb from "../../_Components/BreadCrumb";
import SimilarProducts from "../_Components/SimilarProducts";
import { usePathname } from "next/navigation";
import ProdcutApis from "../../_utils/ProdcutApis";
function ProductDetails({ params }) {
  const path = usePathname();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  console.log(similarProducts);
  console.log(product?.attributes?.category);
  useEffect(() => {
    getProductById_();
    getProductByCategory_();
  }, []);
  const getProductById_ = () => {
    ProdcutApis.getProductById(params?.productId).then((res) => {
      setProduct(res.data.data);
    });
  };
  const getProductByCategory_ = () => {
    ProdcutApis.getProductByCategory("Road").then((res) => {
      setSimilarProducts(res.data.data);
    });
  };
  return (
    <div className="container pt-10">
      <BreadCrumb path={path} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-0">
        <ProductImage product={product} />
        <ProductInfo product={product} />
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
