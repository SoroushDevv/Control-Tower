import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductGallery from "../ProductDetails/Product/ProductGallery";
import { ArrowDownToLine } from 'lucide-react';
import OrderProductsTable from "@/Components/UI/Table/OrderProductsTable";
import OrderPriceSummary from "./OrderPriceSummary";
import { FileX } from 'lucide-react';
import { MapPin } from 'lucide-react';
import OrderProgress from "./OrderProgress";
import { Truck } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
import { MoveRight  } from 'lucide-react';



const OrderDetails = () => {
const navigate = useNavigate()






    const orders = [
        {
            id: "PR-101",
            name: "هودی مردانه",
            image: "/Images/products/hoodi.jpg",
            color: "مشکی",
            size: "L",
            price: 850000,
            quantity: 2,
            rating: 4.5,
        },
        {
            id: "PR-102",
            name: "کفش اسپرت",
            image: "/Images/products/shoe.jpg",
            color: "سفید",
            size: "42",
            price: 2100000,
            quantity: 1,
            rating: 4.8,
        },
        {
            id: "PR-103",
            name: "تیشرت نخی",
            image: "/Images/products/tshirt.jpg",
            color: "آبی",
            size: "M",
            price: 420000,
            quantity: 3,
            rating: 4.2,
        },
    ];

    const goBack = () => {
      navigate(-1)
    }




    return (
        <div className="w-full flex flex-col justify-start items-center gap-2">
            <div className="group w-full flex justify-start items-center gap-2 py-2 px-3 cursor-pointer"
            onClick={() => goBack()}
            >
              <MoveRight className="group-hover:text-dark-primary-hover transition-all duration-200 ease-in-out"/>
              <span>سفارشات</span>
            </div>

             <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-4 gap-2">
            <div className="col-span-1 lg:col-span-3">
                <div className="grid grid-cols-1 grid-rows-2 gap-3">
                    {/* order details */}
                    <div className="col-span-1 flex flex-col gap-3 border border-light-border rounded-md">
                        <div className="w-full flex justify-between items-center py-4 px-6 border border-light-border-light">
                            <span className="text-lg font-bold">سفارش <span className="text-light-text-secondary">#ORD-7241</span> </span>
                            <button className="flex justify-center items-center gap-2 py-2 px-4 bg-blue-500 hover:bg-blue-700  rounded-sm text-light-bg-base transition-all duration-200 ease-in-out">
                                <span className="">فاکتور</span>
                                <ArrowDownToLine />
                            </button>
                        </div>
                        <div className="py-3 px-4">
                            <OrderProductsTable />
                        </div>
                        <div className="w-fit py-3 px-4 border-t-2 border-dotted">
                            <OrderPriceSummary
                                items={orders}
                                discountPercent={15}
                                discountCode="Dash15%"
                                shippingCost={65}
                                taxPercent={14}
                            />
                        </div>
                    </div>
                    {/* order status */}
                    <div className="col-span-1 h-fit border border-light-border rounded-md divide-y-2">
                        <div className="flex justify-between items-center py-4 px-6">
                            <span className="text-lg font-bold">وضعیت سفارش</span>

                            <div className="flex justify-center items-center gap-2 text-dark-text-primary">
                                <div className="flex justify-center items-center gap-3 py-2 px-4 bg-red-500 hover:bg-red-700 rounded-md transition-all ease-in-out duration-200 cursor-pointer">
                                    <button className="">لغو سفارش</button>
                                    <FileX />
                                </div>
                                <div className="flex justify-center items-center gap-3 py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-md transition-all ease-in-out duration-200 cursor-pointer">
                                    <button >تغییر ادرس</button>
                                    <MapPin />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full flex justify-center items-center gap-3 py-2 px-4">
                            <OrderProgress />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-1 ">
                <div className="grid grid-cols-1 grid-rows-auto gap-4">
                    <div className="col-span-1 border border-light-border py-3 px-4 space-y-3 rounded-md">
                        <div className="flex justify-between items-start gap-2">
                            <span className="text-sm font-semibold text-light-text-secondarySoft">اطلاعات مشتری</span>
                            <button className=" text-blue-400 hover:text-blue-600">پروفایل</button>
                        </div>
                        <div className="flex flex-col space-y-2 justify-between items-start">
                            <div className="flex justify-between items-center gap-2">
                                <div className="h-8 w-8 rounded-md overflow-hidden">
                                    <img className="h-full w-full object-contain" src="/Images/profile-thumb/user.png" alt="" />
                                </div>
                                <div className="flex flex-col justify-between items-start">
                                    <span className="">سروش مرادی</span>
                                    <span className="">مشتری</span>
                                </div>

                            </div>
                            <div className="flex w-full gap-3">
                                <Mail className="size-5 text-light-primary-fill" />
                                <span className="text-sm">soroushmoradoi13.sm@gmail.com</span>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="size-5 text-light-primary-fill -scale-y-90" />
                                <span className="text-sm">09174065478</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-1 border border-light-border py-3 px-4 space-y-3 rounded-md">
                        <div className="w-full flex justify-start items-center gap-2">
                            <MapPinHouse className="size-5 "/>
                         <span className="text-lg text-light-text-secondary ">ادرس</span>

                        </div>
                        <div className="w-full flex flex-col gap-3">
                        
                            <div className="w-full flex gap-2">
                                <span className="text-light-text-secondary">استان:</span>
                                <span>فارس</span>

                            </div>
                            <div className="w-full flex gap-2">
                                <span className="text-light-text-secondary">شهر:</span>
                                <span>شیراز -گلدشت محدی-کوچه 25</span>

                            </div>
                            <div className="w-full flex gap-2">
                                <span className="text-light-text-secondary">کد پستی:</span>
                                <span>3385678678</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    )
}



export default OrderDetails;