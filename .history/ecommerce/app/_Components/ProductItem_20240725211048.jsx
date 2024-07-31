import React from "react";

function ProductItem(Props) {
  const product = Props;
  console.log(product);
  return <div>{product.attributes.title}</div>;
}

export default ProductItem;
