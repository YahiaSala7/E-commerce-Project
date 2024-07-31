import React from "react";

function SimilarProducts() {
  return (
    <div className="grid grid-cols-2 gap-3 py-10 sm:grid-col-3 md:grid-cols-4">
      {latestProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default SimilarProducts;
