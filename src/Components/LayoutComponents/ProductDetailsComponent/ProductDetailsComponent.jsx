import React from "react";
import { div } from "motion/react-client";
import ProductGallery from "@/Components/UI/Product/ProductGallery";
import Rating from "@/Components/UI/Rating/Rating";
import ColorCircles from "@/Components/UI/ProductColorCircles/ColorCircles";
import Button from "@/Components/UI/Button/Button";

const ProductDetailsComponent = () => {



    const Images = [
        "/Images/product-detail-images/kif-1.jpg",
        "/Images/product-detail-images/kif-2.jpg",
        "/Images/product-detail-images/kif-3.jpg",
        "/Images/product-detail-images/kif-4.jpg",
    ]

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col justify-between gap-6">
                <div className="title w-full">
                    <p className="text-2xl font-bold text-gray-800  transition-colors duration-200 cursor-pointer">
                        کیف چرم زنانه
                    </p>
                </div>

                <div className="rate w-full flex items-center gap-2">
                    <Rating value={3} max={5} type="scale5" />
                    <span className="text-gray-500 text-sm">(9.12k reviews)</span>
                </div>

                <div className="desc w-full bg-gray-50 p-4 rounded-md border border-gray-200  transition-all duration-200">
                    <p className="font-semibold text-gray-700 mb-1">توضیحات:</p>
                    <span className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, earum!
                    </span>
                </div>

                <div className="price w-full flex items-center gap-2 bg-gray-50 p-3 rounded-md border border-gray-200  transition-all duration-200">
                    <span className="font-medium text-gray-700">قیمت:</span>
                    <span className="font-bold text-green-600 text-lg">1,600,000</span>
                </div>

                <div className="colors w-full flex items-center gap-2 bg-gray-50 p-3 rounded-md border border-gray-200  transition-all duration-200">
                    <span className="font-medium text-gray-700">رنگ‌ها:</span>
                    <ColorCircles colors={["black", "gray"]} size={6} />
                </div>

                <div className="quantity w-full flex items-center gap-2 bg-gray-50 p-3 rounded-md border border-gray-200  transition-all duration-200">
                    <span className="font-medium text-gray-700">تعداد:</span>
                    <span className="font-bold text-gray-800">10</span>
                </div>

                <div className="actions w-full flex justify-center">
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-md shadow  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        ویرایش محصول
                    </button>
                </div>
            </div>

            <div className="w-full flex justify-center items-center p-4 bg-gray-50 rounded-xl border border-gray-200  transition-all duration-200">
                <ProductGallery images={Images} />
            </div>
        </div>

    )


}

export default ProductDetailsComponent;