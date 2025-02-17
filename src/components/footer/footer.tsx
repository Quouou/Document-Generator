import { ModeToggle } from "@/components/modal-day-night";
import Image from "next/image";

export function Footer() {
  return (
    <header className=" fixed bottom-0 w-full px-4 border-t-4 mb-5 pt-6 ">
      <div className="flex flex-auto pr-4 ml-20">
        <Image
          src="/logoipsum-317.svg"
          alt="logo"
          width={100}
          height={100}
          className="mr-4"
        />
      </div>
    </header>
  );
}
