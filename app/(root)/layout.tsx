import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="w-[81%] min-h-[80vh] relative top-[10vh] ml-72 bg-[#F6F9FC] dark:bg-[#1f1f1f] p-4">
        <div className="h-[90vh] p-8 rounded-md bg-white dark:bg-black">
          {children}
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
