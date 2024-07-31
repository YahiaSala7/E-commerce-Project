import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import cartApis from "../../_utils/cartApis";
import { cartContext } from "../../_context/cartContext";
function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(cartContext);
  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };
      cartApis
        .addToCart(data)
        .then((res) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="text-center sm:text-start">
      {product?.id ? (
        <div>
          <h2>{product?.attributes?.title}</h2>
          <p className="text-gray-400 text-[14px]  ">
            {product?.attributes?.Category}
          </p>
          <p className="my-2 text-sm font-medium">
            {product?.attributes?.description[0]?.children[0]?.text}
          </p>
          <p className="text-gray-400 text-[14px] flex items-center gap-2">
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className="w-5 h-5 text-green-500" />
            ) : (
              <AlertOctagon className="w-5 h-5 text-red-500" />
            )}
            available for instant delivery
          </p>
          <h2 className="mt-4 mb-2 text-xl text-primary">
            {product?.attributes?.price}EGP
          </h2>
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center gap-1 px-4 py-2 m-auto sm:m-[unset] font-bold text-white rounded-lg bg-primary">
            <ShoppingCart className="w-5 h-5" /> Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
}

export default ProductInfo;
