import React from "react";
import { useNavigate } from "react-router-dom";
import { div } from "motion/react-client";
import { MoveRight } from 'lucide-react';
import productDetailsComponent from "../../Components/LayoutComponents/ProductDetailsComponent/ProductDetailsComponent";

const productDetails = () => {
    const navigate = useNavigate()




    const goBack = () => {
        navigate(-1)
    }




    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex justify-start items-center gap-1 mb-4 cursor-pointer"
                >
                <div className="transition-all duration-200 ease-in-out hover:translate-x-1">

                    <MoveRight onClick={() => goBack()}/>
                </div>
                <span>محصولات</span>
            </div>
            <productDetailsComponent />
        </div>
    )


}

export default productDetails;