import ProductItem from "@/app/_Components/ProductItem";
import React from "react";

function SimilarProducts({ similarProducts }) {
  return (
    <div className="grid grid-cols-2 gap-3 py-10 sm:grid-col-3 md:grid-cols-4">
      {similarProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default SimilarProducts;
