import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { ChildProps } from "@/types";

const AuthLayout = ({ children }: ChildProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-40 h-screen bg-black/50" />
      <Navbar />
      <Sidebar />
      <main className="flex items-center justify-center top-1/3 w-full h-[90vh] z-50  relative">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
