import { ShoppingCart } from "lucide-react";
import React from "react";

function ProductInfo({ productInfo }) {
  return (
    <div>
      <h2>{productInfo?.attributes?.title}</h2>
      <p className="text-gray-400 text-[14px] flex gap-1">
        {productInfo?.attributes?.Category}
      </p>
      <p className="my-2 text-sm font-medium">
        {productInfo?.attributes?.description[0]?.children[0]?.text}
      </p>
      <h2 className="mt-4 text-xl text-primary">
        {productInfo?.attributes?.price}EGP
      </h2>
      <button className="flex items-center px-4 py-2 font-bold text-white rounded-lg bg-primary">
        <ShoppingCart className="w-4 h-4" /> Add To Cart
      </button>
    </div>
  );
}

export default ProductInfo;
