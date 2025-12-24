import * as React from "react";
import Comments from "./Comments/Comments";
import Notifications from "./Notifications/Notifications";
import Tickets from "./Tickets/Tickets";
import { TabsContainer } from "@/Components/UI/Tabs/Tabs";



export const Communications = () => {

  const tabs = [
    { value: "tickets", label: "تیکت ها", Component: Tickets },
    { value: "messages", label: "پیام ها", Component: Notifications },
    { value: "comments", label: "کامنت ها", Component: Comments },
  ];




    return (
        <div className="w-full h-full flex flex-col gap-4 ">
            <div className="w-full h-full flex flex-col gap-3 py-2 px-4  dark:bg-dark-bg-surface dark:text-dark-text-primary ">
                <div className="flex justify-start items-start flex-col gap-3">
                    <h1 className="font-extrabold text-2xl ">داشبورد</h1>
                    <div className="breadcrumb text-light-text-secondary">داشبورد-اعلانها</div>
                </div>
                <div className="h-full overflow-hidden overflow-y-scroll scrollbar-hide">

                <TabsContainer tabs={tabs} />
                </div>
            </div>   
               
        </div>
    )

}


export default Communications;