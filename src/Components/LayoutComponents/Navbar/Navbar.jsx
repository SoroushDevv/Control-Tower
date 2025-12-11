import React from "react"
import { motion } from "framer-motion"

export default function Login() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="w-full h-14 flex justify-center items-center bg-red-600 border-2 rounded-lg "
    >
      hdk dldjshs
    </motion.div>
  )
}
