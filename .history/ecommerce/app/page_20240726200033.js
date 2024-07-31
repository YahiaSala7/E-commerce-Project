import Image from "next/image";
import Hero from "./_Components/Hero";
import ProductsSection from "./_Components/ProductsSection";

export default function Home() {
  return (
    <div className="home">
      {/* <Hero /> */}
      <ProductsSection />
    </div>
  );
}
