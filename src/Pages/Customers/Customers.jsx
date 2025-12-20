import React from "react";
import { Eye } from 'lucide-react';
import { Users } from 'lucide-react';
import { Banknote } from 'lucide-react';
import { TrendingDown } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Plus } from 'lucide-react';
import { X } from 'lucide-react';
import Badge from "./../../Components/UI/Badge/Badge"
import UsersTable from "../../Components/UI/Table/UsersTable";



export default function Customers() {



    return (
        <div className="bg-light-bg-surface dark:bg-dark-bg-surface dark:text-dark-text-primary overflow-y-auto h-screen w-full">
            <div className="w-full h-fit">
                <p className="relative py-2 px-4 ct-title">اطلاهات کلی مشتری ها
                </p>
            </div>
            <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 items-stretch gap-6 p-2 mb-10">
                <div className="border border-light-border rounded-2xl dark:border-dark-border p-4 shadow-lg">
                    <div className="size-8 rounded-full flex justify-center items-center bg-gray-200 border-gray-400 mb-4">
                        <Users className="stroke-light-icon-accentFill size-4" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-light-text-secondary mb-2">تعداد کل</h2>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">5800</span>
                        <div className="flex text-light-state-danger">
                            <TrendingDown />
                            <span>18%</span>
                        </div>
                    </div>
                </div>
                <div className="border border-light-border rounded-2xl dark:border-dark-border p-4 shadow-lg">
                    <div className="size-8 rounded-full flex justify-center items-center bg-gray-200 border-gray-400 mb-4">
                        <Banknote className="stroke-light-icon-accentFill size-4" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-light-text-secondary mb-2">VIP ها</h2>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">1000</span>
                        <div className="flex text-light-state-success">
                            <TrendingUp />
                            <span>20%</span>
                        </div>
                    </div>

                </div>
                <div className="border border-light-border rounded-2xl dark:border-dark-border p-4 shadow-lg">
                    <div className="size-8 rounded-full flex justify-center items-center bg-gray-200 border-gray-400 mb-4">
                        <Eye className="stroke-light-icon-accentFill size-4" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-light-text-secondary mb-2">کاربر های انلاین</h2>
                    </div>
                    <div className="flex  justify-between items-center">
                        <span className="text-2xl font-bold">250</span>
                        <div class="flex flex-row-reverse -space-x-3 overflow-hidden">
                            <img class="inline-block size-6 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" src="/Images/profile-pics/user-2.jpg" alt="User-2"></img>
                            <img class="inline-block size-6 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" src="/Images/profile-pics/user-3.jpg" alt="User-3"></img>
                            <img class="inline-block size-6 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" src="/Images/profile-pics/user-1.jpg" alt="User-1"></img>
                            <img class="inline-block size-6 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" src="/Images/profile-pics/user-2.jpg" alt="User-2"></img>
                            <img class="inline-block size-6 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" src="/Images/profile-pics/user-3.jpg" alt="User-3"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col divide-y-2 border border-dark-border rounded-md ">
                <div className="w-full flex justify-between items-center py-4 px-6">
                    <span className="ct-title">لیست مشتری ها
                        <Badge style="mr-2"> 547 تا</Badge>
                    </span>
                    <div className="flex gap-2">
                        <select className="py-2 px-4 border border-dark-border dark:border-light-border rounded-md cursor-pointer dark:text-dark-text-primary dark:bg-dark-bg-surface">

                            <option className="rounded-md dark:text-dark-text-primary dark:bg-dark-bg-surface cursor-pointer" value="فیلتر">انتخاب فیلتر...</option>
                            <option className="rounded-md dark:text-dark-text-primary dark:bg-dark-bg-surface cursor-pointer" value="جدیدترین">جدیدترین</option>
                            <option className="rounded-md dark:text-dark-text-primary dark:bg-dark-bg-surface cursor-pointer" value="قدیمی ترین">قدیمی ترین</option>
                            <option className="rounded-md dark:text-dark-text-primary dark:bg-dark-bg-surface cursor-pointer" value="بیشترین خرید">بیشترین خرید</option>
                        </select>
                        <div className="group flex items-center gap-2 overflow-hidden transition-all duration-300 ease-in-out p-2 pr-4 border border-blue-950 bg-blue-600 text-white rounded-md cursor-pointer max-w-fit">
                            <Plus />
                            <button className="max-w-0 opacity-0 whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:opacity-100">
                                اضافه کردن یوزر جدید
                            </button>
                        </div>
                    </div>


                </div>
                <div className="flex justify-between items-center py-4 px-6">
                    <div className="py-2 px-4 border border-dark-border-light flex justify-center gap-1 rounded-full">
                        <button className="-translate-y-1">
                            پیش فرض
                        </button>
                        <X />
                    </div>
                    <div className="flex gap-2">
                        <div className="border border-dark-border dark:border-light-border rounded-full">
                            <input type="text" className="w-full h-full py-2 px-4 rounded-full" placeholder="دنبال چه میگردی ..." />
                        </div>
                        <select className="py-2 px-4 border border-dark-border dark:border-light-border rounded-md cursor-pointer dark:text-dark-text-primary dark:bg-dark-bg-surface">
                            <option className={"rounded-md dark:text-dark-text-primary dark:bg-dark-bg-surface cursor-pointer"}>همه کاربرها...</option>
                            <option className={"rounded-md dark:text-dark-text-primary dark:bg-dark-bg-surface cursor-pointer"}>کاربران فعال</option>
                            <option className={"rounded-md dark:text-dark-text-primary dark:bg-dark-bg-surface cursor-pointer"}>ادمین ها</option>
                            <option className={"rounded-md dark:text-dark-text-primary dark:bg-dark-bg-surface cursor-pointer"}>vip ها</option>
                        </select>
                    </div>


                </div>
                <div className="w-full py-4 px-6">
                    <UsersTable />
                </div>
            </div>
        </div>
    )
}