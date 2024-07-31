import React from "react";

function ProductItem({ product }) {
  return <div>{product.attributes.title}</div>;
}

export default ProductItem;
