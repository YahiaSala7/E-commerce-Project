import React from "react";
import LatestProducts from "./LatestProducts";
import { ArrowRight } from "lucide-react";

function ProductsSection() {
  return (
    <>
      <div className="latest-products flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <h2 className="text-[14px] sm:text-[20px] md:text-[24px] xs:text-[18px]">
          Latest Products
        </h2>
        <h4 className="text-primary flex  items-center text-[14px] sm:text-[20px] md:text-[24px] xs:text-[14px]">
          View all collection{" "}
          <ArrowRight className="w-4 h-4 text-primary mt-[1px]" />{" "}
        </h4>
      </div>
      <LatestProducts />
    </>
  );
}

export default ProductsSection;
