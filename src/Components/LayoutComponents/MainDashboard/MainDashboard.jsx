import React, { useState, useEffect } from "react"
import CountUp from "./../../UI/CountUp/CountUp"
// import AnimatedCounter from "../../UI/CountUp/AnimatedCounter"
import SalesLineChart from "../../Charts/LineChart"
import ProductPieChart from "../../Charts/ProductPieChart"
import RecentOrdersTable from "./../../UI/Table/RecentOrdersTable"
import RoundedPieChart from "../../Charts/RoundedPieChart"
import TargetRadialChart from "../../Charts/TargetRadialChart"
import MultiRadialChart from "../../Charts/MultiRadialChart"
import CategoryRadarChart from "../../Charts/RadarChart"


export const MainDashboard = () => {




    return (
     <div className="w-full bg-light-bg-surface overflow-hidden flex flex-col">
    {/* والد اصلی را flex-1 و overflow-y-auto می‌کنیم. 
        این کار باعث می‌شود محتوا در فضای باقی‌مانده اسکرول بخورد.
    */}
    <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-hide">
        <div className="flex flex-col gap-6">
            
            {/* Stats Cards Section */}
            <div className="w-full">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border rounded-xl bg-light-bg-surfaceAlt p-4 dark:border-gray-800 dark:bg-dark-bg-surfaceAlt">
                    {[
                        { title: "مجموع فروش(تومان)", value: 123234564, percent: "-10%", color: "text-light-state-danger" },
                        { title: "کل سفارش ها", value: 10500, percent: "15%+", color: "text-light-state-success" },
                        { title: "تعداد کل مشتریان", value: 500, percent: "8%-", color: "text-light-state-danger" },
                        { title: "تعداد محصولات فعال", value: 100, percent: "20%+", color: "text-light-state-success" }
                    ].map((item, idx) => (
                        <li key={idx} className="flex flex-col border border-gray-200 rounded-lg bg-light-bg-surface p-3 dark:border-gray-700 dark:bg-dark-bg-surface shadow-sm transition-transform hover:scale-[1.02]">
                            <div className="w-full flex justify-between items-center mb-2">
                                <span className="ct-title text-sm">{item.title}</span>
                                <span className={`font-bold ${item.color}`}>{item.percent}</span>
                            </div>
                            <div className="text-xl font-bold">
                                <CountUp to={item.value} duration={0.8} separator="," />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Charts Section 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border border-light-border rounded-xl bg-light-bg-surfaceAlt p-4 dark:bg-dark-bg-surfaceAlt">
                <div className="w-full">
                    <SalesLineChart />
                </div>
                <div className="w-full">
                    <ProductPieChart />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 border border-light-border rounded-xl bg-light-bg-surfaceAlt p-4 dark:bg-dark-bg-surfaceAlt">
                <RecentOrdersTable />
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full border-light-border rounded-xl bg-light-bg-surfaceAlt p-4 dark:bg-dark-bg-surfaceAlt h-[800px]">
            <RoundedPieChart/>
            <TargetRadialChart/>
            <MultiRadialChart/>
            <CategoryRadarChart/>
            </div>
        </div>
    </div>
</div>
    )
}


export default MainDashboard;