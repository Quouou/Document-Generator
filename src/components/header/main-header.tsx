import { ModeToggle } from "@/components/modal-day-night";
import Image from "next/image";

export function MainHeader() {
  return (
    <header className="flex flex-auto border-b-4 justify-between items-center  ">
      <div className="flex flex-auto pr-4 ml-10">
        <Image
          src="/logoipsum-317.svg"
          alt="logo"
          width={100}
          height={100}
          className="mr-4"
        />
        <h1>Sample</h1>
      </div>
      <div className="mr-5">
        <ModeToggle />
      </div>
    </header>
  );
}
