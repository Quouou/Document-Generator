import Image from "next/image";
import { MainHeader } from "@/components/header/main-header";
import { Footer } from "@/components/footer/footer";
import { CarouselDemo } from "@/components/slideshow";
export default function Home() {
  return (
    <div>
      <MainHeader />
      <div className="flex-grow flex justify-center items-center mt-20 mr-96 h-81">
        <CarouselDemo />
        <h1>Effortless Document Creation</h1>
      </div>
      <Footer />
    </div>
  );
}
