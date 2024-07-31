import Image from "next/image";
import React from "react";

function ProductImage({ productInfo }) {
  const imageSource = productInfo?.attributes?.image?.data[0]?.attributes?.url;

  return (
    <div>
      <Image
        src={imageSource}
        alt="product-image"
        width={400}
        height={400}
        className="rounded-lg"
      />
      <div className="w-[400px] h-[400px] rounded-lg bg-slate-200 animate-pulse "></div>
    </div>
  );
}

export default ProductImage;
