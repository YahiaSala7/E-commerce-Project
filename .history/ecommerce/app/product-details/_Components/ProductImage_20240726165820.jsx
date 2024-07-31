import Image from "next/image";
import React from "react";

function ProductImage({ productInfo }) {
  console.log(productInfo);
  const imageSource = productInfo;
  return (
    <div>
      {/* <Image src={} alt="product-image" width={400} height={400}/> */}
    </div>
  );
}

export default ProductImage;
