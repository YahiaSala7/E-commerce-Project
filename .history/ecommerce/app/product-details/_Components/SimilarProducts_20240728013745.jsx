import React from "react";
import ProductItem from "../../_Components/ProductItem";
function SimilarProducts({ similarProducts }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-col-3 md:grid-cols-4">
      {similarProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default SimilarProducts;
