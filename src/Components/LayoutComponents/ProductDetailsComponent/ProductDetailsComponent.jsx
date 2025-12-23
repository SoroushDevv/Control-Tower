import React from "react";
import { div } from "motion/react-client";
import ProductGallery from "@/Components/UI/Product/ProductGallery";



const ProductDetailsComponent = () => {



    const Images = [
        "/Images/product-detail-images/kif-1.jpg",
        "/Images/product-detail-images/kif-2.jpg",
        "/Images/product-detail-images/kif-3.jpg",
        "/Images/product-detail-images/kif-4.jpg",
    ]

    return (
        <div className="w-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2 shrink-0">
          

                <div className="w-full ">
                    <ProductGallery images={Images} />
                </div>

          
            <div className=""></div>
        </div>
    )


}

export default ProductDetailsComponent;