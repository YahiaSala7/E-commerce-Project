import React from "react";

function Hero() {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-xl font-extrabold sm:text-xl ">
            Unlock Style. Elevate Shopping.
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              Explore Fashion Essentials.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-[18px]/relaxed">
            Browse our curated collection of stylish apparel designed to elevate
            your wardrobe effortlessly. Find the perfect blend of comfort and
            fashion to suit every occasion.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#">
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-secondary focus:outline-none focus:ring active:text-red-500 sm:w-auto"
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
