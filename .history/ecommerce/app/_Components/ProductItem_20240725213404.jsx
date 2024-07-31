import Image from "next/image";
import React from "react";

function ProductItem({ product }) {
  console.log(product);
  const imageSource = product?.attributes?.image?.data;
  console.log(imageSource);
  return (
    <div>
      <Image
        src={imageSource}
        alt="product Image"
        width={"400px"}
        height={"400px"}
      />
      <div>{product.attributes.title}</div>;
    </div>
  );
}

export default ProductItem;
