import Image from "next/image";
import React from "react";

function ProductItem({ product }) {
  console.log(product);
  const imageSource = product.attributes.image.data.attributes;

  return (
    <div>
      <Image src={imageSource} />
      <div>{product.attributes.title}</div>;
    </div>
  );
}

export default ProductItem;
