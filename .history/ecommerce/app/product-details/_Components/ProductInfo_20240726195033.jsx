import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React from "react";
import SkeletonProductInfo from "./SkeletonProductInfo";

function ProductInfo({ productInfo }) {
  return (
    <div className="text-center sm:text-start">
      <h2>{productInfo?.attributes?.title}</h2>
      <p className="text-gray-400 text-[14px]  ">
        {productInfo?.attributes?.Category}
      </p>
      <p className="my-2 text-sm font-medium">
        {productInfo?.attributes?.description[0]?.children[0]?.text}
      </p>
      <p className="text-gray-400 text-[14px] flex items-center gap-2">
        {productInfo?.attributes?.instantDelivery ? (
          <BadgeCheck className="w-5 h-5 text-green-500" />
        ) : (
          <AlertOctagon className="w-5 h-5 text-red-500" />
        )}
        available for instant delivery
      </p>
      <h2 className="mt-4 mb-2 text-xl text-primary">
        {productInfo?.attributes?.price}EGP
      </h2>
      <button className="flex items-center gap-1 px-4 py-2 m-auto sm:m-[unset] font-bold text-white rounded-lg bg-primary">
        <ShoppingCart className="w-5 h-5" /> Add To Cart
      </button>
      <SkeletonProductInfo />
    </div>
  );
}

export default ProductInfo;
