import React, { useState, useEffect } from "react";
import Input from "../../UI/Input/Input";
import { Link } from "react-router-dom";
import { LayoutDashboard } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
// import { CirclePile } from 'lucide-react';
import { Users } from 'lucide-react';
import { BadgePercent } from 'lucide-react';
import { Bell } from 'lucide-react';
import { CircleChevronRight } from 'lucide-react';
import { CircleChevronLeft } from 'lucide-react';

import { ChartNoAxesCombined } from 'lucide-react';
import { CirclePile } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Search } from 'lucide-react';
import { useTheme } from "../../../Contexts/ThemeContext";
import ThemeToggleButtonVertical from "../../UI/ThemeToggleButton/ThemeToggleBottonVertical";
import ThemeToggleButtonHorizontal from "../../UI/ThemeToggleButton/ThemeToggleButtonHorizontal";
function Sidebar() {

  const { isDark, toggleTheme } = useTheme()
  const [isClose, setIsClose] = useState(false)


  useEffect(() => {

    console.log("close :", isClose)
  }, [isClose])
  return (
    <div className={`${isClose ? "w-20" : "w-80"}  h-fit max-w-64 bg-light-bg-base text-light-text-primary dark:bg-dark-bg-base font-light p-4`} >
      <div className="w-full h-screen flex flex-col justify-between items-start">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full h-16 flex justify-between items-center">
            {!isClose && (
              <img className={`h-full w-2/3 object-cotain`} src="/COLogo.png" alt="applogo" />
            )}
            <div className={`size-10 text-light-bg-base bg-dark-bg-surfaceAlt flex justify-center items-center font-bold text-xl border-2 border-dark-primary rounded-full`} onClick={() => setIsClose(!isClose)}>
              {isClose ? <CircleChevronLeft /> : <CircleChevronRight />}

            </div>
          </div>
          <div className="w-full bg-light-bg-base dark:bg-dark-bg-base text-light-text-primary font-light  mb-12">
            <div className="">
              <h2 className={`${isClose ? "hidden" : ""} ct-title py-2`}>
                دیده بان
              </h2>
              <ul className="w-full flex flex-col gap-2 justify-start">
                <li className="ct-tab flex gap-2">
                  <LayoutDashboard />
                  <span className={`${isClose ? "hidden" : ""}`}>داشبورد</span>
                </li>

                <li className="ct-tab-active flex gap-2">
                  <Users />
                  <span className={`${isClose ? "hidden" : ""}`}>مشتری ها</span>
                </li>


                <li className="ct-tab flex gap-2">
                  <ShoppingCart />
                  <span className={`${isClose ? "hidden" : ""}`}>محصولات</span>
                </li>
                <li className="ct-tab flex gap-2">
                  <Bell />
                  <span className={`${isClose ? "hidden" : ""}`}>اعلان ها</span>
                </li>
                <li className="ct-tab flex gap-2">
                  <CirclePile />
                  <span className={`${isClose ? "hidden" : ""}`}>سفارشات</span>
                </li>
                <li className="ct-tab flex gap-2">
                  <BadgePercent />
                  <span className={`${isClose ? "hidden" : ""}`}>تخفیف ها</span>
                </li>
                <li className="ct-tab flex gap-2">
                  <ChartNoAxesCombined />
                  <span className={`${isClose ? "hidden" : ""}`}>امار ها</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full bg-light-bg-base  dark:bg-dark-bg-base text-light-text-primary font-light">
            <h2 className={`${isClose ? "hidden" : ""} ct-title py-2`}>حساب کاربری</h2>
            <div className="ct-tab flex gap-2">
              <Settings />
              <span className={`${isClose ? "hidden" : ""}`}>تنظیمات</span>
            </div>
            {isClose ? <ThemeToggleButtonVertical close={isClose} /> : <ThemeToggleButtonHorizontal close={isClose} />}

          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className={`${isClose ? "bg-none justify-center" : "ct-tab justify-between"} dark:bg-dark-bg-overlay flex  items-center`}>

            <div className="titles flex flex-col gap-1 justify-start items-start">
              <div className={`${isClose ? "hidden" : ""} ct-title`}>سروش مرادی</div>
              <div className={`${isClose ? "hidden" : ""} ct-title`}>ادمین</div>
            </div>
            <div className="w-fit dark:bg-light-bg-surfaceAlt flex justify-center items-center rounded-full p-2">
              <img className={`${isClose ? "size-4" : "size-8"} object-contain text-light-text-primary`} src="/Images/profile-thumb/administrator.png" alt="" />
            </div>

          </div>
          <div className="ct-tab flex justify-start items-center gap-2" >
            <LogOut />
            <span className={`${isClose ? "hidden" : ""}`}>خروج</span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Sidebar;