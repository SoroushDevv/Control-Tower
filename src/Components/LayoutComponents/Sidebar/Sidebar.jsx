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
import CTThemeToggle from "../../UI/ThemeToggleButton/ThemeToggleButton";

function Sidebar() {





  return (
    <div className="w-60 flex flex-col justify-between items-start h-screen max-w-64 bg-light-bg-base text-light-text-primary font-light p-4" >
      <div className="w-full flex flex-col justify-start items-start">
        <div className=" w-full h-16 flex justify-center items-center">
          <img className=" h-full w-2/3 object-cotain" src="/COLogo.png" alt="applogo" />
        </div>
        <div className="w-full bg-light-bg-base text-light-text-primary font-light  mb-12">
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

        <div className="w-full bg-light-bg-base text-light-text-primary font-light">
          <h2 className="ct-title py-2">حساب کاربری</h2>
          <div className="ct-tab flex gap-2">
            <Settings />
            <span>تنظیمات</span>
          </div>
          <div className="w-fit theme-toggle">
            <CTThemeToggle />
          </div>
        </div>


      </div>



      <div className="w-full ct-tab flex gap-2">
        <div className="profile">
          <div className="pic"></div>
          <div className="titles">
            <div className="username"></div>
            <div className="role"></div>
          </div>
        </div>
        <LogOut />
        <span className="w-full">خروج</span>
      </div>


    </div>
  )
}

export default Sidebar;