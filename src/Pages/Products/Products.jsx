import React from "react";
import ProductsTable from "../../Components/UI/Table/ProductsTable";

import { Plus } from 'lucide-react';





export default function Products() {



    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between items-center mb-4 border-b-2 border-b-dark-border-light pb-2">
                <span className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">
                    لیست محصولات
                </span>

                <button
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg 
               bg-dark-primary text-light-text-primary
               hover:bg-dark-primary-hover transition-colors
               shadow-sm"
                >
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-medium hidden sm:inline">
                        محصول جدید
                    </span>
                </button>
            </div>

            <div className="w-full flex justify-start items-center gap-2">
                <select className="bg-white dark:bg-dark-bg-surface border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-light-bg-base px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                    <option value="all">همه</option>
                    <option value="inStock">موجود</option>
                    <option value="outOfStock">ناموجود</option>
                    <option value="lackOfStock">رو به اتمام</option>
                </select>
                <select className="bg-white dark:bg-dark-bg-surface border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-light-bg-base px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                    <option value="all">همه</option>
                    <option value="draft">پیش‌نویس</option>
                    <option value="published">منتشر شده</option>
                    <option value="archived">آرشیو</option>
                </select>
                <input type="text" placeholder="کفش نایکی ..." className="w-52 py-2 px-4 focus:outline-none bg-white dark:bg-dark-bg-surface border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-light-bg-base rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />

            </div>
            <div className="w-full">
                <ProductsTable />
            </div>
        </div>
    )
}