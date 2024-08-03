import { ModeToggle } from "@/components/modal-day-night";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function MainHeader() {
  return (
    <header className="flex flex-auto border-b-4 justify-between items-center h-20 ">
      <div className="flex flex-auto pr-4 ml-20">
        <Image
          src="/logoipsum-317.svg"
          alt="logo"
          width={100}
          height={100}
          className="mr-4"
        />
        <Link href="/">
          <Button
            variant="primary"
            size="sm"
            className="rounded-sm hidden md:block h-auto py-1.5 px-2"
          >
            Home
          </Button>
        </Link>
      </div>
    </header>
  );
}
