import React, { useState, useEffect } from "react"
import CountUp from "./../../UI/CountUp/CountUp"
// import AnimatedCounter from "../../UI/CountUp/AnimatedCounter"
import SalesLineChart from "../../Charts/LineChart"
import ProductPieChart from "../../Charts/ProductPieChart"

export const MainDashboard = () => {




    return (
        <div className="w-full h-ful p-1 bg-light-bg-surface">
            <div className="flex flex-col gap-4 p-1">
                <div className="w-full">
                    <ul className="grid grid-cols-1 md:grid-cols-4 gap-2 border  rounded-lg bg-light-bg-surfaceAlt dark:border-light-border-light dark:bg-dark-bg-surfaceAlt w-full items-center justify-center p-4">
                        <li className="flex flex-col justify-start border border-dark-border-light rounded-md bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-fit ">
                            <div className="w-full flex justify-between items-center py-2 px-3">
                                <span className="ct-title">مجموع فروش(تومان)</span>
                                <span className="font-semibold text-base text-light-state-danger ">-10%</span>
                            </div>
                            <div className="w-full py-2 px-3">
                                <CountUp to={123234564} duration={0.5} />
                            </div>

                        </li>
                        <li className="flex flex-col justify-start border border-dark-border-light rounded-md bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-fit backdrop-blur-md shadow-md">
                            <div className="w-full flex justify-between items-center py-2 px-3">
                                <span className="ct-title">کل سفارش ها</span>
                                <span className="font-semibold text-base text-light-state-success">15%+</span>
                            </div>
                            <div className="w-full py-2 px-3">
                                <CountUp to={10500} />
                            </div>

                        </li>
                        <li className="flex flex-col justify-start border border-dark-border-light rounded-md bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-fit">
                            <div className="w-full flex justify-between items-center py-2 px-3">
                                <span className="ct-title">تعداد کل مشتریان</span>
                                <span className="font-semibold text-base text-light-state-danger">8%-</span>
                            </div>
                            <div className="w-full py-2 px-3">
                                <CountUp to={500} />
                            </div>

                        </li>
                        <li className="flex flex-col justify-start border border-dark-border-light rounded-md bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-fit">
                            <div className="w-full flex justify-between items-center py-2 px-3">
                                <span className="ct-title">تعداد محصولات فعال</span>
                                <span className="font-semibold text-base text-light-state-success">20%+</span>
                            </div>
                            <div className="w-full py-2 px-3">
                                <CountUp to={100} duration={1} />
                            </div>

                        </li>
                    </ul>
                </div>
                <div className="w-full rounded-lg grid grid-cols-2  border border-light-border bg-light-bg-surfaceAlt dark:bg-dark-bg-surfaceAlt p-1" >
                    <div className="w-full h-full p-2">
                        <SalesLineChart />
                    </div>
                    <div className="w-full h-full p-2">
                        <ProductPieChart />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default MainDashboard;