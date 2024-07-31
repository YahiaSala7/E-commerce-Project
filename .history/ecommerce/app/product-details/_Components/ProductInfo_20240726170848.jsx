import React from "react";

function ProductInfo({ productInfo }) {
  return (
    <div>
      <h2>{productInfo?.attributes?.title}</h2>
      <p className="text-gray-400 text-[14px] flex gap-1">
        {productInfo?.attributes?.Category}
      </p>
      <p>{productInfo?.attributes?.description[0]?.children[0]?.text}</p>
    </div>
  );
}

export default ProductInfo;
