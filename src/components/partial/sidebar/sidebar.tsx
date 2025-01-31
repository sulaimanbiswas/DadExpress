import { Button } from "@/components/ui/button";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="w-[240px] bg-white flex-shrink-0 border-r border-[#e4e6eb] pt-1.5 overflow-hidden ">
      <div className="flex gap-3 pt-3.5 pr-5 p-[18px] border-b border-[#e4e6eb] flex-col">
        <div className="flex gap-2 w-full cursor-pointer py-2 px-2 font-medium flex-col justify-between bg-[#f5f6f7] rounded-md">
          <Image
            className="dark:invert w-[22px] h-[22px]"
            src="/usa.svg"
            alt="Next.js logo"
            width={40}
            height={40}
            priority
          />
          <div className="flex justify-between">
            <div>Balance:</div>
            <div>$ 2,28</div>
          </div>
        </div>
        <Button className="h-8 bg-pink-200/50 hover:bg-pink-200/60 text-pink-500 text-xs font-medium">
          Top up the balance
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
