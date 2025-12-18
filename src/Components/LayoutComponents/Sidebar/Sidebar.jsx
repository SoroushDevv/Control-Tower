import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  LayoutDashboard, ShoppingCart, Users, Bell, 
  BadgePercent, ChartNoAxesCombined, CirclePile, 
  Settings, LogOut, CircleChevronRight, CircleChevronLeft 
} from 'lucide-react';
import { useSidebar } from "../../../Contexts/SideBarState";
import Tooltip from "../../UI/Tooltip/Tooltip";
import ThemeToggleButtonVertical from "../../UI/ThemeToggleButton/ThemeToggleBottonVertical";
import ThemeToggleButtonHorizontal from "../../UI/ThemeToggleButton/ThemeToggleButtonHorizontal";

function Sidebar() {
  const { isClose, toggleSidebar } = useSidebar();
  const [activeTabId, setActiveTabId] = useState(1);

  const navTabs = [
    { id: 1, label: "داشبورد", icon: <LayoutDashboard className="outline-none"/>, route: "/dashboard" },
    { id: 2, label: "مشتری ها", icon: <Users className="outline-none"/>, route: "/customers" },
    { id: 3, label: "محصولات", icon: <ShoppingCart className="outline-none"/>, route: "/products" },
    { id: 4, label: "اعلان ها", icon: <Bell className="outline-none"/>, route: "notifications" },
    { id: 5, label: "سفارشات", icon: <CirclePile className="outline-none"/>, route: "orders" },
    { id: 6, label: "تخفیف ها", icon: <BadgePercent className="outline-none"/>, route: "offers" },
    { id: 7, label: "امار ها", icon: <ChartNoAxesCombined className="outline-none"/>, route: "stats" },
  ];

  const accountTabs = [
    { id: 1, label: "تنظیمات", icon: <Settings />, route: "/setting" }
  ];

  return (
    <div 
      className={`
        sticky top-0 right-0 h-screen flex flex-col
        bg-light-bg-base text-light-text-primary dark:bg-dark-bg-surface 
        transition-all duration-200 ease-in-out font-light
        ${isClose ? "w-20 px-2 py-4" : "w-80 p-4"}
      `}
    >
      {/* Header Section */}
      <div className={`w-full flex mb-6 ${isClose ? "justify-center" : "justify-between"} items-center`}>
        {!isClose && (
          <img className="h-12 w-2/3 object-cover" src="/logoo.png" alt="applogo" />
        )}
        <div 
          className="cursor-pointer text-light-bg-base dark:text-white" 
          onClick={toggleSidebar}
        >
          {isClose ? <CircleChevronLeft size={40} fill="black" /> : <CircleChevronRight size={40} fill="black" />}
        </div>
      </div>

      {/* Middle Section (Scrollable Area) */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
        
        {/* Navigation Tabs */}
        <div className="w-full mb-8">
          <h2 className={`${isClose ? "hidden" : ""} ct-title py-2`}>دیده بان</h2>
          <ul className="w-full flex flex-col gap-2">
            {navTabs.map((tab) => (
              <li 
                key={tab.id} 
                onClick={() => setActiveTabId(tab.id)} 
                className={`
                  flex gap-2 items-center cursor-pointer transition-all
                  ${isClose ? "ct-tab-close justify-center py-2" : "ct-tab"} 
                  ${activeTabId === tab.id ? "ct-tab-active" : ""}
                `}
              >
                {isClose ? (
                  <Tooltip content={tab.label}>{tab.icon}</Tooltip>
                ) : (
                  <>
                    {tab.icon}
                    <span>{tab.label}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Account Tabs */}
        <div className="w-full">
          <h2 className={`${isClose ? "hidden" : ""} ct-title py-2`}>حساب کاربری</h2>
          <ul className="w-full flex flex-col gap-2">
            {accountTabs.map((tab) => (
              <li 
                key={tab.id} 
                className={`flex gap-2 items-center ${isClose ? "ct-tab-close justify-center py-2" : "ct-tab"}`}
              >
                {isClose ? (
                  <Tooltip content={tab.label}>{tab.icon}</Tooltip>
                ) : (
                  <>
                    {tab.icon}
                    <span>{tab.label}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
          
          <div className={`mt-4 flex ${isClose ? "justify-center" : "px-4 py-2"}`}>
            {isClose ? <ThemeToggleButtonVertical close={isClose} /> : <ThemeToggleButtonHorizontal close={isClose} />}
          </div>
        </div>
      </div>

      {/* Footer Section (Always at Bottom) */}
      <div className="mt-auto pt-4 flex flex-col gap-2 border-t border-gray-100 dark:border-gray-800">
        <div className={`${isClose ? "justify-center" : "ct-tab justify-between"} flex flex-row-reverse items-center bg-transparent`}>
          <div className="w-fit dark:bg-light-bg-surfaceAlt flex justify-center items-center rounded-full p-2">
            <img className={`${isClose ? "size-6" : "size-8"} object-contain`} src="/Images/profile-thumb/manager.png" alt="user" />
          </div>
          {!isClose && (
            <div className="flex flex-col gap-1 items-start">
              <div className="ct-title leading-none">سروش مرادی</div>
              <div className="ct-subtitle leading-none">ادمین</div>
            </div>
          )}
        </div>

        <Link 
          to="/login" 
          className={`
            flex items-center gap-2 text-inherit hover:text-inherit
            bg-light-state-dangerFaint hover:bg-light-state-dangerSoft
            ${isClose ? "ct-tab-close justify-center py-2" : "ct-tab py-2"}
          `}
        >
          {isClose ? (
            <Tooltip content="خروج">
              <LogOut className="stroke-light-state-danger" />
            </Tooltip>
          ) : (
            <>
              <LogOut className="stroke-light-state-danger" />
              <span>خروج</span>
            </>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;