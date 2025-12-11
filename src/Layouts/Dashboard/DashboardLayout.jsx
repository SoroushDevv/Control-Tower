import { Outlet } from "react-router-dom";
import Navbar from "./../../Components/LayoutComponents/Navbar/Navbar"
import Sidebar from "../../Components/LayoutComponents/Sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="relative w-full flex bg-gray-50 dark:bg-dark-bg min-h-screen rtl">

     <Sidebar />
      <div className="sticky left-0 top-0 flex flex-col flex-1 min-h-screen">

       <Navbar />
        <main className="p-6 md:p-8 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
