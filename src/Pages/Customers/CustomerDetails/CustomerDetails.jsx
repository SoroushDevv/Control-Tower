import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign } from 'lucide-react';
import { ShoppingBasket } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import Badge from "./../../../Components/UI/Badge/Badge"
import { UserRound } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import UserOrdersTable from "../../../Components/UI/Table/UserOrdersTable";



const CustomerDetails = () => {
    const navigate = useNavigate()


    const goBack = () => {
        navigate(-1)
    }


    return (
        <div className="relative w-full h-screen">
            <div className="w-full flex justify-between items-start p-2 dark:bg-dark-bg-surface dark:text-light-bg-base">
                <div className="w-full overflow-hidden overflow-y-auto scrollbar-hide">
                    <div className="w-full flex justify-start items-center gap-2 py-2 px-4 cursor-pointer">
                        <MoveRight onClick={() => goBack()} />
                        <span>کاربران</span>
                    </div>
                    <div className="w-full flex justify-start items-center gap-2 py-2 px-4">
                        <div className="w-full flex justify-start items-center gap-2 py-2 px-4">
                            <div className="flex justify-start items-center p-3">
                                <img className="w-16 h-16 rounded-full" src="/Images/profile-pics/user-1.jpg" alt="user profile pic" />
                            </div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <div className="flex h-full w-fit ">
                                    <span className="">سروش مرادی
                                    </span>
                                    <Badge color="white" style="flex justify-between items-center gap-2 border-2 border-light-border-primary mx-1 w-fit">
                                        <span className="text-dark-bg-base">فعال</span>
                                        <span className="size-3 rounded-full bg-green-600 animate-pulse"></span>
                                    </Badge>
                                </div>
                                <span>soroushmoradi13.sm@gmail.com</span>
                            </div>
                        </div>


                    </div>
                    <div className="flex justify-between items-stretch gap-2 ">
                        {/* profile section */}
                        <div className="flex max-h-full basis-2/5 h-full shadow-md border border-dark-border-light rounded-xl">
                            <div className="w-full flex flex-col justify-between items-center py-3 divide-y-2 divide-dark-border-light-10 dark:divide-light-border space-y-2">
                                <div className="w-full flex flex-col justify-between items-start gap-2 p-2">
                                    <div className="w-full flex justify-between items-start gap-2 ">
                                        <div className="flex justify-start items-center gap-2">
                                            <div className="flex justify-center items-center size-8 p-1 border shadow-xl border-dark-border-light-10 rounded-full">
                                                <UserRound className="size-5" />
                                            </div>
                                            <span>اطلاعات پایه</span>
                                        </div>
                                        <div className="size-7 flex justify-center items-center rounded-md hover:bg-gray-200 cursor-pointer" >
                                            <Pencil className={"size-4 "} />
                                        </div>
                                    </div>

                                    <div className="w-full flex flex-col justify-start items-start gap-1 ">
                                        <span className="ct-subtitle font-bold">ایدی :</span>
                                        <span className="text-sm border border-gray-200 rounded-full py-1 px-2 bg-dark-bg-surface text-dark-text-primary">کاربر-123</span>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col justify-start items-start gap-1 p-2">
                                    <span className="ct-subtitle">نام:</span>
                                    <span className="font-bold ">سروش</span>
                                </div>
                                <div className="w-full flex flex-col justify-start items-start gap-1 p-2">
                                    <span className="ct-subtitle">نام خانوادگی:</span>
                                    <span className="font-bold ">مرادی</span>
                                </div>
                                <div className="w-full flex flex-col justify-start items-start gap-1 p-2">
                                    <span className="ct-subtitle">ایمیل:</span>
                                    <span className="font-bold ">soroushmoradi13.sm@gmail.com</span>
                                </div>
                                <div className="w-full flex flex-col justify-start items-start gap-1 p-2">
                                    <span className="ct-subtitle">شماره:</span>
                                    <span className="font-bold ">09174065478</span>
                                </div>

                                <div className="w-full flex flex-col justify-start items-start gap-1 p-2">
                                    <span className="ct-subtitle">نقش:</span>
                                    <span className="font-bold ">ادمین</span>
                                </div>
                                <div className="w-full flex flex-col justify-start items-start gap-1 p-2">
                                    <span className="ct-subtitle">نوع عضویت:</span>
                                    <span className="font-bold ">VIP</span>
                                </div>

                            </div>

                        </div>
                        {/* payment section */}
                        <div className="flex  max-h-full basis-3/5 shadow-md border border-dark-border-light rounded-xl h-full">
                            <div className="w-full h-full flex flex-col justify-start items-center py-3 px-4 gap-4">
                                <div className="w-full flex justify-start items-center gap-1">
                                    <div className="flex justify-center items-center size-8 p-1 border shadow-xl border-dark-border-light-10 rounded-full">
                                        <ShoppingBasket className="size-5" />
                                    </div>
                                    <span>سفارشات</span>
                                </div>
                                {/* user overview */}
                                <div dir="ltr" className="w-full grid grid-cols-3 shrink-0 divide-x divide-gray-500 border border-dark-border rounded-xl p-4">
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <span className="ct-subtitle font-bold">کل تخفیفات</span>
                                        <span className="ct-title">2,000,000 تومان</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <span className="ct-subtitle font-bold">ارزش سفارش ها</span>
                                        <span className="ct-title">23,300,000 تومان</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <span className="ct-subtitle font-bold">تعداد سفارش ها</span>
                                        <span className="ct-title">23</span>
                                    </div>




                                </div>
                                {/* user orders table */}
                                <UserOrdersTable userId={"u2"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CustomerDetails;

