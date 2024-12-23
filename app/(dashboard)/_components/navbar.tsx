"use client";

import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4 shadow-sm bg-white h-full">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
