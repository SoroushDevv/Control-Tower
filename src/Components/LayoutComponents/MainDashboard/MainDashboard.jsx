import React, { useState, useEffect } from "react"
import CountUp from "./../../UI/CountUp/CountUp"
// import AnimatedCounter from "../../UI/CountUp/AnimatedCounter"


export const MainDashboard = () => {




    return (
        <div className="w-full h-full">
            <div className="flex flex-col">
                <div className="w-full pt-3 rounded-md">
                    <ul className="grid grid-cols-1 md:grid-cols-4 gap-2 border border-dark-border-light rounded-md bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface w-full items-center justify-center p-4">
                        <li className="flex flex-col justify-start border border-dark-border-light rounded-md bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-fit ">
                            <div className="w-full flex justify-between items-center py-2 px-3">
                                <span className="ct-title">مجموع فروش(تومان)</span>
                                <span className="font-semibold text-base text-light-state-danger ">-10%</span>
                            </div>
                            <div className="w-full py-2 px-3">
                                <CountUp to={123234564} duration={0.5}/>
                            </div>

                        </li>
                        <li className="flex flex-col justify-start border border-dark-border-light rounded-md bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-fit backdrop-blur-md shadow-md">
                            <div className="w-full flex justify-between items-center py-2 px-3">
                                <span className="ct-title">کل سفارش ها</span>
                                <span className="font-semibold text-base text-light-state-success">15%+</span>
                            </div>
                            <div className="w-full py-2 px-3">
                                <CountUp to={10500}/>
                            </div>

                        </li>
                        <li className="flex flex-col justify-start border border-dark-border-light rounded-md bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-fit">
                            <div className="w-full flex justify-between items-center py-2 px-3">
                                <span className="ct-title">تعداد کل مشتریان</span>
                                <span className="font-semibold text-base text-light-state-danger">8%-</span>
                            </div>
                            <div className="w-full py-2 px-3">
                                <CountUp to={500}/>
                            </div>

                        </li>
                        <li className="flex flex-col justify-start border border-dark-border-light rounded-md bg-light-bg-surface dark:border-light-border-light dark:bg-dark-bg-surface h-fit">
                            <div className="w-full flex justify-between items-center py-2 px-3">
                                <span className="ct-title">تعداد محصولات فعال</span>
                                <span className="font-semibold text-base text-light-state-success">20%+</span>
                            </div>
                            <div className="w-full py-2 px-3">
                                <CountUp to={100} duration={1}/>
                            </div>

                        </li>
                    </ul>
                </div>
                <div className="w-full pt-3 rounded-md">
                    <div className="w-full h-52 flex justify-between items-center bg-light-bg-surface dark:bg-dark-bg-surface border border-dark-border-light rounded-md">
                         <div className="h-full flex justify-center items-center py-2 px-4 border-light-border-light dark:border-dark-border ">
                            <span className="flex flex-col justify-center w-32 h-full main title">
                                تعداد بازدید های امروز <span className="text-light-text-secondarySoft font-bold">1200</span> بوده است.
                             نسبت به دیروز شاهد <span className="text-light-state-success">20%</span> افزایش بوده ایم 
                            </span>
                         </div>
                         <div className="pic">
                          
                         </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default MainDashboard;