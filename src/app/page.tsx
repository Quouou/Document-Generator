import Image from "next/image";
import { MainHeader } from "@/components/header/main-header";
import { Footer } from "@/components/footer/footer";
export default function Home() {
  return (
    <div>
      <MainHeader />

      <Footer />
    </div>
  );
}
