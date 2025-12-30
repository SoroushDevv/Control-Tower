import React, { useState } from "react";
import { Plus, Pencil, Trash2, Percent, Tag } from "lucide-react";
import Modal from "../Modal/Modal";
import { DeleteOffer } from "@/Pages/Offers/components/DeleteOffer";
import EditOffer from "@/Pages/Offers/components/EditOffer";

const initialOffs = [
    { id: 1, code: "SUMMER25", discountPercent: 25, usageLimit: 100, usedCount: 45, expiresAt: "2025-08-31", isActive: true },
    { id: 2, code: "WELCOME10", discountPercent: 10, usageLimit: 500, usedCount: 234, expiresAt: "2025-12-31", isActive: true },
    { id: 3, code: "FLASH50", discountPercent: 50, usageLimit: 50, usedCount: 50, expiresAt: "2025-01-15", isActive: false },
    { id: 4, code: "NEWYEAR20", discountPercent: 20, usageLimit: 200, usedCount: 100, expiresAt: "2025-01-01", isActive: true },
    { id: 5, code: "VIP30", discountPercent: 30, usageLimit: 150, usedCount: 75, expiresAt: "2025-06-30", isActive: true },
];

const OffersTable = () => {
    const [offs, setOffs] = useState(initialOffs);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [clickedOffer, setClickedOffer] = useState(null)


    const handleDelete = (offer) => {
        console.log("id:", offer)
        setOffs(prev => prev.filter(off => off.id !== offer.id));
        setIsDeleteModalOpen(false)
    }



    return (
        <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden mt-4">
            <div className="overflow-x-auto no-scrollbar dark:bg-dark-bg-surface dark:text-dark-text-primary">
                <table className="w-full text-right text-sm">
                    <thead className="bg-gray-50 dark:bg-gray-800/30 text-gray-400 dark:text-gray-300 uppercase tracking-wide text-xs">
                        <tr>
                            <th className="px-6 py-3">کد</th>
                            <th className="px-6 py-3">درصد تخفیف</th>
                            <th className="px-6 py-3">تعداد استفاده</th>
                            <th className="px-6 py-3">تاریخ انقضا</th>
                            <th className="px-6 py-3">وضعیت</th>
                            <th className="px-6 py-3 text-center">عملیات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {offs.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="h-24 text-center text-gray-400 dark:text-gray-500">
                                    کد تخفیف موجود نیست
                                </td>
                            </tr>
                        ) : (
                            offs.map((off) => (
                                <>
                                    <tr key={off.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/20 transition-colors cursor-pointer">
                                        <td className="px-6 py-4 font-mono font-semibold text-gray-700 dark:text-gray-200">{off.code}</td>
                                        <td className="px-6 py-4 flex items-center gap-1 text-gray-600 dark:text-gray-300">
                                            <Percent size={14} /> {off.discountPercent}%
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                                            {off.usedCount} / {off.usageLimit}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{off.expiresAt}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-md  text-xs font-medium ${off.isActive ? "text-green-500" : "text-red-700"}`}>
                                                {off.isActive ? "فعال" : "غیرفعال"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right flex gap-2 justify-center">
                                            <button className="text-blue-500 hover:text-blue-700 transition-colors"
                                                onClick={() => {
                                                    setClickedOffer(off)
                                                    setIsEditModalOpen(true)
                                                }}>
                                                <Pencil size={16} />
                                            </button>
                                            <button onClick={() => {
                                                setClickedOffer(off)
                                                setIsDeleteModalOpen(true)
                                            }} className="text-red-500 hover:text-red-700 transition-colors">
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>

                                </>

                            ))
                        )}
                    </tbody>
                </table>
                <DeleteOffer open={isDeleteModalOpen} offer={clickedOffer} onOpenChange={() => setIsDeleteModalOpen(!isDeleteModalOpen)} onConfirm={() => handleDelete(clickedOffer)} />
                <EditOffer open={isEditModalOpen} onOpenChange={() => setIsEditModalOpen(false)} offer={clickedOffer} />

            </div>


        </div>
    )
}

export default OffersTable;
