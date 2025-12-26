import React, { useEffect, useState } from "react";
import ProductGallery from "../ProductDetails/Product/ProductGallery";
import { ArrowDownToLine } from 'lucide-react';
import OrderProductsTable from "@/Components/UI/Table/OrderProductsTable";
import OrderPriceSummary from "./OrderPriceSummary";
import { FileX } from 'lucide-react';
import { MapPin } from 'lucide-react';
import OrderProgress from "./OrderProgress";

const OrderDetails = () => {

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





    return (
        <div className=" w-full h-full grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 lg:col-span-1 ">
                <div className="grid grid-cols-1 grid-rows-4">
                    <div className="col-span-1"></div>
                    <div className="col-span-1"></div>
                    <div className="col-span-1"></div>
                    <div className="col-span-1"></div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-3">
                <div className="grid grid-cols-1 grid-rows-2 gap-3">
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
                                discountCode="VELZON15"
                                shippingCost={65}
                                taxPercent={14}
                            />
                        </div>
                    </div>
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
        </div>
    )
}



export default OrderDetails;