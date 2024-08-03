import Image from "next/image";
import { MainHeader } from "@/components/header/main-header";
import { Footer } from "@/components/footer/footer";
import { CarouselDemo } from "@/components/slideshow";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div>
      <MainHeader />
      <div className="flex-grow flex justify-center items-center mt-20 mr-96 h-81">
        <CarouselDemo />
        <div className="ml-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Effortless Document Maker</h1>
          <p className="text-xl mb-8">
            Generate professional documents in minutes
          </p>
          <Button className="px-6 py-3 text-lg">Get Started</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
