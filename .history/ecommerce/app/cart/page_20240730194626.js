"use client";
import React, { useContext } from "react";
import { cartContext } from "../_context/cartContext";
import cartApis from "../_utils/cartApis";
import { useRouter } from "next/navigation";
function Cart() {
  const { cart, setCart } = useContext(cartContext);
  const router = useRouter();
  const getTotalAmount = () => {
    let totalAmont = 0;
    cart.forEach((item) => {
      totalAmont = totalAmont + Number(item?.product?.attributes?.price);
    });
    return totalAmont;
  };
  const deleteCartItem_ = (id) => {
    cartApis
      .deleteCartItem(id)
      .then((res) => {
        if (res) {
          setCart((oldCart) =>
            oldCart.filter((item) => item?.id !== res?.data?.data?.id)
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div className="container max-w-screen-xl py-2">
        <div className="max-w-3xl mx-auto">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart.map((item, index) => {
                console.log(item);
                const sourceImage =
                  item?.product?.attributes?.image?.data[0].attributes.url;
                return (
                  <li className="flex items-center gap-4" key={index}>
                    <img
                      src={sourceImage}
                      alt=""
                      className="object-cover rounded size-16"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">
                        {item?.product?.attributes?.title}
                      </h3>

                      <div className="text-sm text-gray-500">
                        <dt className="inline">Category:</dt>
                        <dd className="inline">
                          {item?.product?.attributes?.Category}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-center justify-end flex-1 gap-2">
                      <div>
                        <dd className="inline">
                          {item?.product?.attributes?.price}EGP
                        </dd>
                      </div>
                      <button
                        className="text-gray-600 transition hover:text-red-600"
                        onClick={() => deleteCartItem_(item?.id)}>
                        <span className="sr-only">Remove item</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col pt-8 mt-8 border-t border-gray-100 ">
              <div className="flex justify-between !text-base font-medium py-4">
                <p>Total</p>
                <p>${getTotalAmount()}</p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() =>
                    router.push(`/checkout?amount=${getTotalAmount()}`)
                  }
                  className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
