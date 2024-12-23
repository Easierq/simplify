import SidebarRoutes from "./sidebar-routes";
import { Logo } from "./logo";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-gray-100 shadow-sm">
      <Link href="/">
        <div className="p-6">
          <Logo />
        </div>
      </Link>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
