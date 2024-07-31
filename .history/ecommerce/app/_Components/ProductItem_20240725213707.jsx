import Image from "next/image";
import React from "react";

function ProductItem({ product }) {
  console.log(product);
  const imageSource = product?.attributes?.image?.data[0]?.attributes?.url;
  console.log(imageSource);
  return (
    <div>
      <Image src={imageSource} alt="product Image" />
      <div>{product.attributes.title}</div>;
    </div>
  );
}

export default ProductItem;
