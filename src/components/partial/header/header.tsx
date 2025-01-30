import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[50px] bg-primary w-screen grid items-center grid-cols-[173px_1fr] lg:grid-cols-[240px_50%_1fr]">
      <div className="flex items-center">
        <div className=" w-16 flex justify-center items-center flex-shrink-0">
          <button className="flex justify-center items-center w-6 h-6">
            <AlignJustify size={22} className="text-white" />
          </button>
        </div>
        <Link href="/accounts" className="h-6 flex items-center">
          <Image
            className="dark:invert"
            src="/logo.svg"
            alt="Next.js logo"
            width={113}
            height={19}
            priority
          />
        </Link>
      </div>
      <div></div>
      <div className="flex items-center"></div>
    </div>
  );
};

export default Header;
