import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex bg-gray-50 dark:bg-dark-bg min-h-screen rtl">

      <Sidebar />

      <div className="flex flex-col flex-1 min-h-screen">

        <Navbar />

        <main className="p-6 md:p-8 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
