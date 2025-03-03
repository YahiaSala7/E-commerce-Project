import React, { useContext } from "react";
import { cartContext } from "../_context/cartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Cart() {
  const { cart, setCart } = useContext(cartContext);
  console.log(cart);
  console.log(cart?.length);
  const router = useRouter();
  const getTotalAmount = () => {
    let totalAmont = 0;
    cart.forEach((item) => {
      totalAmont = totalAmont + Number(item?.product?.attributes?.price);
    });
    return totalAmont;
  };
  return (
    <div className="absolute z-10 p-5 overflow-auto bg-gray-100 border rounded-md shadow-sm right-7 top-12 h-[550px] min-w-[300px]">
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.map((item, index) => {
            const sourceImage =
              item?.product?.attributes?.image?.data[0].attributes.url;

            return (
              <li className="flex items-center gap-4" key={index}>
                <img
                  src={sourceImage}
                  alt="item cart"
                  className="object-cover rounded size-16"
                />
                <div>
                  <h3 className="text-sm text-gray-900">
                    {item?.product?.attributes?.title}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Category:</dt>
                      <dd className="inline">
                        {item?.product?.attributes?.Category}
                      </dd>
                    </div>

                    <div>
                      <dt className="inline">Price:</dt>
                      <dd className="inline">
                        {item?.product?.attributes?.price}EGP
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="space-y-4 text-center">
          <a
            href="/cart"
            className="block px-5 py-3 text-sm text-gray-600 transition border border-gray-600 rounded hover:ring-1 hover:ring-gray-400">
            View my cart ({cart.length})
          </a>

          <button
            onClick={() => router.push(`/checkout?amount=${getTotalAmount()}`)}
            className="block w-full px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600">
            Checkout
          </button>

          <a
            href="#"
            className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600">
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
