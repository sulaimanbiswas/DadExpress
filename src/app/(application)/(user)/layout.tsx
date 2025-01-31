import Header from "@/components/partial/header/header";
import Sidebar from "@/components/partial/sidebar/sidebar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f0f3f7]">
      <Header />
      <div className="flex h-[calc(100vh-50px)] relative  overflow-hidden">
        <Sidebar />

        <div className="w-full justify-self-center overflow-auto pt-7 pb-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
