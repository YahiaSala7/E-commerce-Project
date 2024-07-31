import Image from "next/image";
import React from "react";

function ProductItem({ product }) {
  console.log(product);
  const imageSource = product?.attributes?.image?.data[0]?.attributes?.url;
  console.log(imageSource);
  return (
    <div>
      <Image
        src={imageSource}
        alt="product Image"
        width={"400"}
        height={"350"}
        className="rounded-t-xl h-[180px] object-cover"
      />
      <div className="p-2 ">
        <div className="flex justify-between gap-2 items-center">
          <h2 className="line-clamp-1">{product.attributes.title}</h2>
          <h2>{product.attributes.price}</h2>
        </div>
        <div className="text-gray-400 text-[14px]">
          <p>{product.attributes.Category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
