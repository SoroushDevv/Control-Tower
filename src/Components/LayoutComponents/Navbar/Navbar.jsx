import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Input from "../../UI/Input/Input"
import { useSearch } from "../../../Contexts/SearchContext"
import { BellRing } from 'lucide-react';
import { Bell } from 'lucide-react';
import NavbarToggleThemeButton from "./../../UI/ThemeToggleButton/NavbarToggleThemeButton"
import Badge from "./../../UI/Badge/Badge"
import SearchBar from "../../UI/SearchBar/SearchBar";
import { Notifications } from "../../Notifications/Notifications";

export default function Login() {

  const { query, setQuery, isSearchOpen, setIsSearchOpen } = useSearch()
  const [isNotifsOpen, setIsNotifsOpen] = useState(false)



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-fit flex justify-center items-center p-1 "
    >
      <div className="w-full h-20 px-3 pt-2 flex justify-between items-center gap-3 border-light-border bg-light-bg-surfaceAlt text-light-text-primary dark:bg-dark-bg-surfaceAlt dark:text-dark-text-primary dark:border-dark-border  border-2 rounded-full">
        <div className="flex basis-2/6 h-full justify-start items-center gap-3 border-light-border-light bg-transparent text-light-text-primarySoft dark:text-dark-text-primarySoft dark:border-dark-border-light">
          <div className="min-h-20 flex justify-between items-center gap-3 border-light-border-light">
            <div className="h-full dark:bg-light-bg-surfaceAlt flex justify-center items-center rounded-full p-2">
              <img className="h-10 w-10 object-contain text-light-text-primary" src="/Images/profile-thumb/manager.png" alt="user-profile-image" />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="ct-title">سروش مرادی </span>
              <span className="ct-subtitle">ادمین </span>
            </div>

          </div>
          <div className="relative h-full w-auto flex justify-center items-center  cursor-pointer" onMouseEnter={() => setIsNotifsOpen(true)} onMouseLeave={() => setIsNotifsOpen(false)}>
            <div className="h-auto w-full flex justify-center items-center border-2 rounded-full p-2" >
              <Badge style="absolute -top-1 -left-1" color="red">
                1
              </Badge>
              <Bell className="" />
              {isNotifsOpen && (
                <div className="absolute top-full right-1/2 translate-x-1/2 flex flex-col justify-between items-start gap-1 bg-light-bg-surfaceAlt text-light-bg-base dark:bg-dark-bg-surfaceAlt dark:text-dark-text-primary shadow-surface-dark divide-y-2 divide-opacity-50 min-w-[400px] py-2 px-3 rounded-md z-50">
                  <div className="w-full flex basis-1/6 justify-center items-center py-2">
                    <p className="ct-title text-light-text-primarySoft dark:text-dark-text-primarySoft">اعلان ها</p>
                  </div>
                  <div className="w-full flex basis-4/6 justify-center items-center py-2">
                    <Notifications />
                  </div>
                  <div className="w-full flex basis-1/6 justify-center items-center py-2">
                    <button className="px-3 py-2 border-2 border-light-border-light dark:border-dark-border-light dark:hover:border-dark-border-focus rounded-md text-light-text-primarySoft dark:text-dark-text-primarySoft">همه پیام ها</button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
        <div className="flex basis-4/6 h-full justify-end items-center gap-3 ">
          <div className="relative  flex justify-end items-center w-full h-fit">
            <SearchBar />
          </div>
        </div>
        <div className="flex basis-1/6 h-full justify-center items-center gap-1 border-light-border-light bg-transparent text-light-text-primarySoft dark:text-dark-text-primarySoft dark:border-dark-border-light">
          <img className="h-20 w-30 object-cover" src="/logoo.png" alt="app-logo" />
        </div>


      </div>
    </motion.div>
  )
}
