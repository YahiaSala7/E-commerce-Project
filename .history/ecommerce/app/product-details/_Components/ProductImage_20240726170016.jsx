import Image from "next/image";
import React from "react";

function ProductImage({ productInfo }) {
  const imageSource = productInfo?.attributes?.image?.data[0]?.attributes?.url;
  console.log(imageSource);

  return (
    <div>
      {/* <Image src={} alt="product-image" width={400} height={400}/> */}
    </div>
  );
}

export default ProductImage;
