import React from "react";

function ProductItem({ product }) {
  console.log(product);
  return <div>{product.attributes.title}</div>;
}

export default ProductItem;
