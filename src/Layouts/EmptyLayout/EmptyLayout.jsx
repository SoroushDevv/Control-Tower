import { Outlet } from "react-router-dom";

export default function EmptyLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg p-6 rtl">
      <Outlet />
    </div>
  );
}
