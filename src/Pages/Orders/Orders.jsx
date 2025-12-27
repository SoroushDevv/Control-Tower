import * as React from "react";
import RecentOrdersTable from "@/Components/UI/Table/RecentOrdersTable";



export const Orders = () => {

    return (
        <div className="w-full h-full flex flex-col gap-4 ">
            <div className="w-full h-full flex flex-col gap-3 py-2 px-4  dark:bg-dark-bg-surface dark:text-dark-text-primary ">
                <div className="flex justify-start items-start flex-col gap-3">
                    <h1 className="font-extrabold text-2xl ">داشبورد</h1>
                    <div className="breadcrumb text-light-text-secondary">داشبورد-سفارشات</div>
                </div>
                <div className="h-full overflow-hidden overflow-y-scroll scrollbar-hide">
                <RecentOrdersTable />
                </div>
            </div>   
               
        </div>
    )

}


export default Orders;