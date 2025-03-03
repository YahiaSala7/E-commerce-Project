import React from "react";

function Cart() {
  return (
    <div
      className="relative w-screen max-w-sm px-4 py-8 bg-gray-100 border border-gray-600 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex="-1">
      <button className="absolute text-gray-600 transition end-4 top-4 hover:scale-110">
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
              alt=""
              className="object-cover rounded size-16"
            />

            <div>
              <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">Size:</dt>
                  <dd className="inline">XXS</dd>
                </div>

                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">White</dd>
                </div>
              </dl>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
              alt=""
              className="object-cover rounded size-16"
            />

            <div>
              <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">Size:</dt>
                  <dd className="inline">XXS</dd>
                </div>

                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">White</dd>
                </div>
              </dl>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
              alt=""
              className="object-cover rounded size-16"
            />

            <div>
              <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">Size:</dt>
                  <dd className="inline">XXS</dd>
                </div>

                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">White</dd>
                </div>
              </dl>
            </div>
          </li>
        </ul>

        <div className="space-y-4 text-center">
          <a
            href="#"
            className="block px-5 py-3 text-sm text-gray-600 transition border border-gray-600 rounded hover:ring-1 hover:ring-gray-400">
            View my cart (2)
          </a>

          <a
            href="#"
            className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600">
            Checkout
          </a>

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
