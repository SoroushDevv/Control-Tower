import React, { useState, useEffect } from "react"




export const  MainDashboard = () => {




return (
<div className="w-full h-full">
    <div className="flex flex-col">
     <div>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-2 border border-dark-border-light bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface p-2">
            <li className="flex flex-col justify-start border border-dark-border-light bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-52 ">
                <div className="w-full flex justify-between items-center py-2 px-3">
                    <span>مجموع فروش</span>
                    <span>-10%</span>
                </div>
                <div className="w-full py-2 px-3">
                    <span className="font-bold text-2xl">123,345,236 تومان</span>
                </div>
                <div>
                    {/* //chart */}
                </div>
            </li>
            <li className="flex flex-col justify-start border border-dark-border-light bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-52">
                <div className="w-full flex justify-between items-center py-2 px-3">
                    <span>کل سفارش ها</span>
                    <span>+15%</span>
                </div>
                <div className="w-full py-2 px-3">
                    <span className="font-bold text-2xl">10,500</span>
                </div>
                <div>
                    {/* //chart */}
                </div>
            </li>
            <li className="flex flex-col justify-start border border-dark-border-light bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-52">
                <div className="w-full flex justify-between items-center py-2 px-3">
                    <span>تعداد کل مشتریان</span>
                    <span>-8%</span>
                </div>
                <div className="w-full py-2 px-3">
                    <span className="font-bold text-2xl">500</span>
                </div>
                <div>
                    {/* //chart */}
                </div>
            </li>
            <li className="flex flex-col justify-start border border-dark-border-light bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-52">
                <div className="w-full flex justify-between items-center py-2 px-3">
                    <span>تعداد محصولات فعال</span>
                    <span>+20%</span>
                </div>
                <div className="w-full py-2 px-3">
                    <span className="font-bold text-2xl">100</span>
                </div>
                <div>
                    {/* //chart */}
                </div>
            </li>
        </ul>
     </div>
    </div>

</div>
)
}


export default MainDashboard;