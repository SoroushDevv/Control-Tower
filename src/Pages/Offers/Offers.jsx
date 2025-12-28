import React, { useState } from "react";
import OffersTable from "@/Components/UI/Table/OffersTable";
import { Plus, Pencil, CirclePercent, Trash2, Percent, Tag, MoveRight } from "lucide-react";
import Modal from "@/Components/modal/Modal";
import AddNewOffer from "./components/AddNewOffer";

export default function Offers() {
const [isModalOpen,setIsModalOpen] = useState()





const closeModal = () => {
  setIsModalOpen(false)
}
  return (
    <div clasName="w-full bg-light-bg-surfaceAlt dark:bg-dark-bg-surfaceAlt border border-light-border dark:border-gray-800 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Tag size={18} className="text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">کدهای تخفیف</h3>
        </div>
        <button className="flex items-center gap-1 text-xs font-semibold text-blue-500 hover:text-blue-600 transition-colors" onClick={() => setIsModalOpen(true)}>
          افزودن جدید 
          <Plus size={14} />
        </button>
      </div>
      <OffersTable />
 
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AddNewOffer onClose={closeModal}/>
        </Modal>
    </div>
  )
}