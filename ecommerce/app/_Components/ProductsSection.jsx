import React from "react";
import LatestProducts from "./LatestProducts";
import { ArrowRight } from "lucide-react";

function ProductsSection() {
  return (
    <>
      <div className="flex items-center justify-between px-4 pb-4 mx-auto latest-products sm:px-6 lg:px-8">
        <h2 className=" sm:text-[20px] md:text-[24px] xs:text-[18px]">
          Latest Products
        </h2>
        {/* <h4 className="text-primary flex  items-center text-[14px] sm:text-[20px] md:text-[24px] xs:text-[18px]">
          View all collection{" "}
          <ArrowRight className="w-4 h-4 text-primary mt-[1px]" />{" "}
        </h4> */}
      </div>
      <LatestProducts />
    </>
  );
}

export default ProductsSection;
