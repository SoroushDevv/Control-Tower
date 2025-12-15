import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import ThemeToggleButtonVertical from "../../UI/ThemeToggleButton/ThemeToggleBottonVertical";
import ThemeToggleButtonHorizontal from "../../UI/ThemeToggleButton/ThemeToggleButtonHorizontal";
import { useSidebar } from "../../../Contexts/SideBarState";
import Tooltip from "../../UI/Tooltip/Tooltip";



function Sidebar() {

  const urlParam = useParams("/setting")



  const { isClose, toggleSidebar } = useSidebar()
  const [activeTabId, setActiveTabId] = useState(1)

  const navTabs = [
    { id: 1, label: "داشبورد", icon: <LayoutDashboard className="outline-none"/>, route: "/dashboard" },
    { id: 2, label: "مشتری ها ", icon: <Users className="outline-none"/>, route: "/customers" },
    { id: 3, label: "محصولات", icon: <ShoppingCart className="outline-none"/>, route: "/products" },
    { id: 4, label: "اعلان ها", icon: <Bell className="outline-none"/>, route: "notifications" },
    { id: 5, label: "سفارشات", icon: <CirclePile className="outline-none"/>, route: "orders" },
    { id: 6, label: "تخفیف ها", icon: <BadgePercent className="outline-none"/>, route: "offers" },
    { id: 7, label: "امار ها", icon: <ChartNoAxesCombined className="outline-none"/>, route: "stats" },
  ]

  const accountTabs = [
    { id: 1, label: "تنظیمات", icon: <Settings />, route: "/setting" }
  ]






  useEffect(() => {

    console.log("close :", isClose)
  }, [isClose])
  return (
    <div className={`${isClose ? "w-20" : "w-80"} h-screen sticky top-0 right-0 bg-light-bg-base text-light-text-primary dark:bg-dark-bg-base font-light ${isClose ? "px-2 py-4" : "p-4"} transition-all duration-200 ease-in-out`} >
      <div className="w-full h-full  flex-1 
    scrollbar-thin
    scrollbar-thumb-gray-400
    scrollbar-track-transparent
    hover:scrollbar-thumb-gray-500
    dark:scrollbar-thumb-gray-600 flex flex-col justify-between items-start">
        <div className="w-full flex flex-col justify-start items-start">
          <div className={` w-full h-18 flex ${isClose ? "justify-center" : "justify-between"} items-center`}>
            {!isClose && (
              <img className={`h-full w-2/3 object-cover`} src="/logoo.png" alt="applogo" />
            )}
            <div className={`size-10 h-full text-light-bg-base bg-dark-bg-surfaceAlt flex justify-center items-center font-bold text-xl bg-transparent`} onClick={() => toggleSidebar()}>
              {isClose ? <CircleChevronLeft size={60} fill="black" /> : <CircleChevronRight size={60} fill="black" />}

            </div>
          </div>
          <div className="w-full bg-light-bg-base bg-transparent font-light  mb-12">
            <h2 className={`${isClose ? "hidden" : ""} ct-title py-2`}>
              دیده بان
            </h2>
            <ul className={` w-full flex flex-col gap-2 justify-start`}>
              {navTabs.map((tab) => (
                <li key={tab.id} onClick={() => setActiveTabId(tab.id)} className={`${isClose ? "ct-tab-close justify-center py-2" : "ct-tab "} flex gap-2 ${activeTabId === tab.id ? "ct-tab-active" : ""}`}>

                  {isClose ?
                    <Tooltip content={`${tab.label}`}>
                      {tab.icon}
                    </Tooltip> : (
                      <>
                        {tab.icon}
                        <span className={`${isClose ? "hidden" : ""}`}>{tab.label}</span>
                      </>

                    )}

                </li>
              ))}
            </ul>

          </div>
          <div className={`${isClose ? "flex flex-col justify-center items-center" : "flex flex-col justify-start"} w-full bg-light-bg-base  bg-transparent font-light`}>
            <h2 className={`${isClose ? "hidden" : ""} ct-title py-2`}>حساب کاربری</h2>
            {accountTabs.map((tab) => (

              <div key={tab.id} className={`${isClose ? "ct-tab-close justify-center py-2" : "ct-tab "} flex gap-2`}>
                {
                  isClose ? <Tooltip content={`${tab.label}`}>
                    {tab.icon}
                  </Tooltip> :
                    <>
                      {tab.icon}
                      <span className={`${isClose ? "hidden" : ""}`}>{tab.label}</span>
                    </>
                }
              </div>
            ))}




            <div className={`${isClose ? "justify-center" : "px-4 py-2"} w-full flex`} >

              {isClose ? <ThemeToggleButtonVertical close={isClose} /> : <ThemeToggleButtonHorizontal close={isClose} />}
            </div>

          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className={`${isClose ? "bg-none justify-center" : "ct-tab justify-between"} bg-transparent flex flex-row-reverse items-center`}>
            {isClose ? <Tooltip content={"پروفایل"}>
              <div className="w-fit dark:bg-light-bg-surfaceAlt flex justify-center items-center rounded-full p-2">
                <img className={`${isClose ? "size-6" : "size-8"} object-contain text-light-text-primary`} src="/Images/profile-thumb/administrator.png" alt="user-profile-image" />
              </div>
            </Tooltip> : (

              <div className="w-fit dark:bg-light-bg-surfaceAlt flex justify-center items-center rounded-full p-2">
                <img className={`${isClose ? "size-6" : "size-8"} object-contain text-light-text-primary`} src="/Images/profile-thumb/administrator.png" alt="user-profile-image" />
              </div>


            )}

            <div className="titles flex flex-col gap-1 justify-start items-start">
              <div className={`${isClose ? "hidden" : ""} ct-title`}>سروش مرادی</div>
              <div className={`${isClose ? "hidden" : ""} ct-subtitle`}>ادمین</div>
            </div>


          </div>
          <Link to={"/login"} className={`${isClose ? "ct-tab-close justify-center py-2" : "ct-tab justify-start py-2"} text-inherit hover:text-inherit flex  items-center gap-2 bg-light-state-dangerFaint hover:bg-light-state-dangerSoft`} >
            {isClose ? <Tooltip content={"خروج"}>
              <LogOut className="stroke-light-state-danger" />
            </Tooltip> : (
              <>
                <LogOut className="stroke-light-state-danger" />
                <span  className={`${isClose ? "hidden" : ""} `}>خروج</span>
              </>
            )}
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Sidebar;