import Image from "next/image";
import React from "react";
import { List } from "lucide-react";
function ProductItem({ product }) {
  const imageSource = product?.attributes?.image?.data[0]?.attributes?.url;
  return (
    <div className="border-secondary rounded-t-xl  border-2  hover:border hover:shadow-md hover:cursor-pointer">
      <Image
        src={imageSource}
        alt="product Image"
        width={"400"}
        height={"350"}
        className="rounded-t-xl m-auto w-[100%]"
      />
      {/* h-[180px] object-cover */}
      <div className="p-3 bg-gray-100">
        <div className="flex justify-between gap-2 items-center">
          <h2 className="line-clamp-1 text-[16px]">
            {product.attributes.title}
          </h2>
          <h2 className="text-gray-700 items-center text-[16px]">
            {product.attributes.price}EGP
          </h2>
        </div>
        <div className="text-gray-400 text-[14px] flex gap-1">
          <List className="w-4 h-4" />
          <p>{product.attributes.Category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
