import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex items-center bg-gray-900 h-80 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/background2.jpg"
            className="absolute inset-0 object-cover w-full h-full sm:object-contain opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <Image width={50} height={50} alt="logo" src={"/logo.svg"} />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-primary sm:text-3xl md:text-4xl ">
              <span className="text-white">Welcome to</span> EpicRides
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Discover Your Perfect Ride. Elevate Your Cycling Experience.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative block -mt-16 lg:hidden">
              <a className="block text-black" href="/">
                <span className="sr-only">Home</span>
                <Image width={50} height={50} alt="logo" src={"/logo.svg"} />
              </a>

              <h2 className="mt-6 text-2xl font-bold text-primary sm:text-3xl md:text-4xl ">
                <span className="text-black">Welcome to</span> EpicRides
              </h2>

              <p className="mt-4 leading-relaxed text-black/90">
                Discover Your Perfect Ride. Elevate Your Cycling Experience.
              </p>
            </div>
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
