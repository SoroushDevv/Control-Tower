import React from "react";
import Input from "../../UI/Input/Input";
import { Link } from "react-router-dom";
import { LayoutDashboard } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
// import { CirclePile } from 'lucide-react';
import { Users } from 'lucide-react';
import { BadgePercent } from 'lucide-react';
import { Bell } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';
import { CirclePile } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Search } from 'lucide-react';
import { useTheme } from "../../../Contexts/ThemeContext";
import ThemeToggleButton from "../../UI/ThemeToggleButton/ThemeToggleButton";

function Sidebar() {

  const { isDark, toggleTheme } = useTheme()


  return (
    <div className="w-80 flex flex-col justify-between items-start h-screen max-w-64 bg-light-bg-base text-light-text-primary dark:bg-dark-bg-base font-light p-4" >
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full h-16 flex justify-center items-center">
          <img className="h-full w-2/3 object-cotain" src="/COLogo.png" alt="applogo" />
          <div className="size-10"></div>
        </div>
        <div className="w-full bg-light-bg-base dark:bg-dark-bg-base text-light-text-primary font-light  mb-12">
          <div className="">
            <h2 className="ct-title py-2">دیده بان</h2>
            <ul className="w-full flex flex-col gap-2 justify-start">
              <li className="ct-tab flex gap-2">
                <LayoutDashboard />
                <span>داشبورد</span>
              </li>

              <li className="ct-tab-active flex gap-2">
                <Users />
                <span>مشتری ها</span>
              </li>


              <li className="ct-tab flex gap-2">
                <ShoppingCart />
                <span>محصولات</span>
              </li>
              <li className="ct-tab flex gap-2">
                <Bell />
                <span>اعلان ها</span>
              </li>
              <li className="ct-tab flex gap-2">
                <CirclePile />
                <span>سفارشات</span>
              </li>
              <li className="ct-tab flex gap-2">
                <BadgePercent />
                <span>تخفیف ها</span>
              </li>
              <li className="ct-tab flex gap-2">
                <ChartNoAxesCombined />
                <span>امار ها</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-light-bg-base  dark:bg-dark-bg-base text-light-text-primary font-light">
          <h2 className="ct-title py-2">حساب کاربری</h2>
          <div className="ct-tab flex gap-2">
            <Settings />
            <span>تنظیمات</span>
          </div>
          <div className="ct-btn w-fit theme-toggle">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className=" ct-tab dark:bg-dark-bg-overlay flex justify-between items-center ">

          <div className="titles flex flex-col gap-1 justify-start items-start">
            <div className="ct-title">سروش مرادی</div>
            <div className="role">ادمین</div>
          </div>
          <div className="w-fit dark:bg-light-bg-surfaceAlt flex justify-center items-center rounded-full p-2">
            <img className="size-8 text-light-text-primary" src="/Images/profile-thumb/administrator.png" alt="" />
          </div>

        </div>
        <div className="ct-tab flex justify-start items-center gap-2" >
          <LogOut />
        <span className="w-full">خروج</span>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar;