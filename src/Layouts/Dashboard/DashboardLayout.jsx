import { Outlet } from "react-router-dom";
import Navbar from "./../../Components/LayoutComponents/Navbar/Navbar"
import Sidebar from "../../Components/LayoutComponents/Sidebar/Sidebar";

export default function DashboardLayout() {


  return (
    <div className="flex w-full h-screen">
     
     <Sidebar />
     
      <div className="w-full h-screen px-3">

       <Navbar />
        <main className="w-full h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
