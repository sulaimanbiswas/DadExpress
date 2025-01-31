import { AlignJustify, Bell, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="h-[50px] pr-6 w-full grid items-center grid-cols-[173px_0%_1fr] lg:grid-cols-[240px_50%_1fr]"
      style={{
        background:
          "linear-gradient(218.47deg, rgb(59, 58, 90) -74.13%, rgb(129, 78, 240) 106.5%)",
      }}
    >
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
      <div className=""></div>
      <div className="flex items-center w-full justify-end gap-3">
        <Link
          href="/notificaton"
          className="h-8 w-10 bg-white/10 flex  justify-center items-center rounded-md "
        >
          <Bell className="text-white" size={20} fill="#fff" />
        </Link>

        <div className="h-7 w-7 bg-white flex justify-center items-center rounded-full p-1">
          <User strokeWidth={2.5} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Header;
