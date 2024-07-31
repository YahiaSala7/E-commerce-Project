import React from "react";

function ProductInfo({ productInfo }) {
  return (
    <div>
      <h2>{productInfo?.attributes?.title}</h2>
      <p className="text-gray-400 text-[14px] flex gap-1">
        {productInfo?.attributes?.Category}
      </p>
      <h2 className="text-sm font-medium">
        {productInfo?.attributes?.description[0]?.children[0]?.text}
      </h2>
      <h2 className="mt-4 text-xl text-primary">
        {productInfo?.attributes?.price}EGP
      </h2>
    </div>
  );
}

export default ProductInfo;
