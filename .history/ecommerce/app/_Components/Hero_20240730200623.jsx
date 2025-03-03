"use client";
import React from "react";

function Hero() {
  return (
    <section className="">
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:h-screen">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-2xl font-extrabold sm:text-3xl ">
            Discover Your Perfect Ride. Elevate Your Cycling Experience.
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              Explore Top-Quality Bicycles.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-[18px]/relaxed">
            Browse our curated collection of premium bicycles designed to
            enhance your riding experience effortlessly. Find the perfect blend
            of performance and style for every type of ride.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => window.scrollY(100)}
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-primary hover:bg-secondary focus:outline-none focus:ring active:bg-red-500 sm:w-auto scroll-smooth">
              Get Started
            </button>

            <a
              className="block w-full px-12 py-3 text-sm font-medium rounded shadow text-primary hover:text-secondary focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
