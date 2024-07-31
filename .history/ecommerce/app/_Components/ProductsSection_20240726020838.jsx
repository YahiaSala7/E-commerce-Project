import React from "react";
import LatestProducts from "./LatestProducts";
import { ArrowRight } from "lucide-react";

function ProductsSection() {
  return (
    <>
      <div className="latest-products">
        <h2 className="mx-auto px-4 sm:px-6 lg:px-8 pb-4">Latest Products</h2>
        <h4>
          View all collection <ArrowRight className="w-4 h-4 text-primary" />{" "}
        </h4>
        <LatestProducts />
      </div>
    </>
  );
}

export default ProductsSection;
