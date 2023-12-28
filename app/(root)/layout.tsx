import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import React from "react";

function NavbarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
}

export default NavbarLayout;
