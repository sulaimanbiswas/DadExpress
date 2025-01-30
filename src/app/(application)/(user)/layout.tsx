import Header from "@/components/partial/header/header";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default UserLayout;
