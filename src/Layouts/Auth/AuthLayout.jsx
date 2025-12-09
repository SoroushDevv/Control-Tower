import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-dark-bg px-4 rtl">

      <div className="w-full max-w-md bg-white dark:bg-dark-surface shadow-xl rounded-2xl p-8">
        <Outlet />
      </div>

    </div>
  );
}