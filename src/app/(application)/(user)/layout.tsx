import Header from "@/components/partial/header/header";
import Sidebar from "@/components/partial/sidebar/sidebar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f0f3f7]">
      <Header />
      <div className="relative flex h-[calc(100vh-50px)] overflow-hidden">
        <Sidebar />

        <div className="w-full justify-self-center overflow-auto pb-10 pt-7">
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
