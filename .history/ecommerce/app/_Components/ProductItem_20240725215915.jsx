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
      <div className="flex justify-between px-2 py-2">
        <h2 className="">{product.attributes.title}</h2>
        <h2>{product.attributes.price}</h2>
      </div>
    </div>
  );
}

export default ProductItem;
