import React from "react"
import { motion } from "framer-motion"
import Input from "../../UI/Input/Input"
import { useSearch } from "../../../Contexts/SearchContext"
import { BellRing } from 'lucide-react';
import { Bell } from 'lucide-react';
import NavbarToggleThemeButton from "./../../UI/ThemeToggleButton/NavbarToggleThemeButton"
import Badge from "./../../UI/Badge/Badge"



export default function Login() {

  const { query, setQuery, isSearchClose, setIsSearchClose } = useSearch()




  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-fit flex justify-center items-center border-2 rounded-lg"
    >
      <div className="w-full h-20 px-3 py-2 flex justify-between items-center gap-3 border-2 rounded-md border-light-border bg-light-bg-base text-light-text-primary dark:bg-dark-bg-base dark:text-dark-text-primary dark:border-dark-border">
        <div className="flex basis-1/5 h-full justify-start items-center gap-3 border-light-border-light bg-transparent text-light-text-primarySoft dark:text-dark-text-primarySoft dark:border-dark-border-light">
          <div className="min-h-20 flex justify-between items-center gap-3 border-light-border-light">
            <div className="h-full overflow-hidden">
              <img className="h-10 w-10 border rounded-full " src="/Images/profile-thumb/manager.png" alt="user-profile-image" />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="ct-title">سروش مرادی </span>
              <span className="ct-subtitle">ادمین </span>
            </div>

          </div>
          <div className="relative h-16 w-16 px-3 flex justify-centter items-center border- ">
            <Badge style="absolute top-1 left-1" color="red">
              1
            </Badge>
            <Bell />
          </div>
          <div className="theme-toggle">
            <NavbarToggleThemeButton />
          </div>
        </div>
        <div className="flex basis-3/5 h-full justify-end items-center gap-3 border-light-border-light bg-transparent text-light-text-primarySoft dark:text-dark-text-primarySoft dark:border-dark-border-light">
          <div className="flex w-full h-full">
            <label></label>
            <input type="text" />
          </div>
        </div>
        <div className="flex basis-1/5 h-full justify-end items-center gap-1 border-light-border-light bg-transparent text-light-text-primarySoft dark:text-dark-text-primarySoft dark:border-dark-border-light">
          <img className="h-20 w-30 object-cover" src="/logoo.png" alt="app-logo" />
        </div>


      </div>
    </motion.div>
  )
}
