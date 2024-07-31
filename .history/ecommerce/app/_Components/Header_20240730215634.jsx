"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../_context/cartContext";
import cartApis from "../_utils/cartApis";
import Cart from "./Cart";
function Header() {
  const { user } = useUser();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, setCart } = useContext(cartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  useEffect(() => {
    user && getCartItems();
  }, [user]);
  const getCartItems = () => {
    cartApis
      .getUserCartItems(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        console.log("response from cart items", res?.data?.data);
        res?.data?.data.forEach((citem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: citem.id,
              product: citem?.attributes?.products?.data[0],
            },
          ]);
        });
      });
  };
  return (
    <header className="bg-white shadow-md">
      <div className="container flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
        <img src="/logo.svg" width={"50px"} height={"50px"} />

        <div className="flex items-center justify-end flex-1 md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/">
                  {" "}
                  Home{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#explore">
                  {" "}
                  Explore{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#contactUS">
                  {" "}
                  Contact Us{" "}
                </a>
              </li>
            </ul>
          </nav>
          <div
            className="block rounded bg-gray-100 p-2.5 text-gray-600  hover:text-gray-600/75 md:hidden relative transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div
              className={`absolute z-10 p-5 bg-gray-100 border rounded-md shadow-sm  top-[65px] h-[550px] min-w-[300px] transition-all ${
                isMenuOpen ? "right-[-100px]" : "right-[-600px]"
              }`}>
              Toggle menu
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          {!user ? (
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondary "
                  href="/sign-in">
                  Login
                </a>

                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-secondary sm:block"
                  href="/sign-up">
                  Register
                </a>
              </div>
            </div>
          ) : (
            <div className="relative flex items-center gap-5">
              <h2 className="flex items-center gap-2">
                <ShoppingCart onClick={() => setIsCartOpen(!isCartOpen)} />(
                {cart?.length})
              </h2>
              <UserButton afterSwitchSessionUrl="/" />
              {isCartOpen ? <Cart /> : ""}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
