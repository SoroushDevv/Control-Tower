import { Outlet } from "react-router-dom";
import Navbar from "./../../Components/LayoutComponents/Navbar/Navbar"
import Sidebar from "../../Components/LayoutComponents/Sidebar/Sidebar";

export default function DashboardLayout() {


  return (
    // <div className="flex w-full h-screen p-1">
      <div className="flex w-full h-screen overflow-hidden">
     
     <Sidebar />
     
      <div className="flex flex-1 flex-col h-full min-w-0">

       <Navbar />
        <main className="flex-1 bg-gray-50 overflow-y-auto no-scrollbar p-4">
          <Outlet />
          <div className="h-20 shrink-0 w-full" ></div>
        </main>
      </div>
    </div>
  );
}
