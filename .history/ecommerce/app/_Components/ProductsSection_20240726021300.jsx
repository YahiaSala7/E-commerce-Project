import React from "react";
import LatestProducts from "./LatestProducts";
import { ArrowRight } from "lucide-react";

function ProductsSection() {
  return (
    <>
      <div className="latest-products flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <h2 className="">Latest Products</h2>
        <h4 className="text-primary flex justify-between items-center">
          View all collection <ArrowRight className="w-6 h-4 text-primary " />{" "}
        </h4>
      </div>
      <LatestProducts />
    </>
  );
}

export default ProductsSection;
