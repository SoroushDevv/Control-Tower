import React from "react";
import { Eye } from 'lucide-react';
import { Users } from 'lucide-react';
import { Banknote } from 'lucide-react';
import { TrendingDown } from 'lucide-react';
import { TrendingUp } from 'lucide-react';





export default function Customers() {



    return (
        <div className="bg-light-bg-surface dark:bg-dark-bg-surface dark:text-dark-text-primary overflow-y-auto h-screen w-full">
            <div className="w-full h-fit">
                <p className="py-2 px-4 ct-title">اطلاهات کلی مشتری ها</p>
            </div>
            <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 items-stretch gap-6 p-2">
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
            <div className="main-info ">
                <div className="">
                    <span className="title"></span>
                    <select className="filter"></select>
                    <button className="add user"></button>

                </div>
                <div className="">
                    <div className="search user">
                        <input type="search" />
                    </div>
                    <select className="filter user loyalty">

                    </select>
                </div>
                <div className="users table">
                    {/* table */}
                </div>
            </div>
        </div>
    )
}