import { useState, useEffect } from "react"







export const Notifications = () => {


    const notificiations = [
        { id: 1, user: "علی کریمی", text: "اگه ممکنه دسترسی من به دوره هوش مصنوعی باز کنید.", status: "close", date: "18/6/1374", priority: "low", userPic: "/user-1.jpg", isAnswered: true },
        { id: 1, user: "علی دایی", text: "ممنون بابت پشتیبانی خوبتون", status: "pending", date: "16/4/1402", priority: "medium", userPic: "/user-2.jpg", isAnswered: true },
        { id: 1, user: "رضا مغولستانی", text: "بررسی فعالیت اقای ایکس در ماه گذشته", status: "open", date: "16/5/1400", priority: "high", userPic: "/user-3.jpg", isAnswered: true },
    ]

    const priorityStyles = {
        low:"border-red-200",
        medium:"border-red-400",
        high:"border-red-600",
        critical:"border-red-800",
        default:"border-gray-500"
    }




    return (
        <ul className="w-full py-1 px-2 flex flex-col justify-between items-center gap-1 rounded-md z-20">
            {notificiations.map((notif) => (
                <li key={notif.id} className="   w-full flex justify-between items-center p-1
    border-2 rounded-md
    border-dark-border-light
    hover:border-dark-border-focus
    dark:border-dark-border-light
    dark:hover:border-dark-border-focus
    transition-colors ">
                    <div className="flex justify-center items-center basis-1/3">
                        <img className="rounded-full w-16 h-16" src={`/Images/profile-pics/${notif.userPic}`} alt="profile-pic" />
                    </div>
                    <div className="flex basis-2/3 justify-between">
                        <div className="flex flex-col">
                            <div className="w-full flex justify-between items-center">
                             <span className="ct-subtitle font-semibold text-opacity-50 mb-2 text-light-text-primary dark:text-dark-text-secondary ">{notif.user}</span>
                            <div className="w-full p-1 text-center text-light-text-secondary dark:text-dark-text-secondary">{notif.date}</div>   
                            </div>
                            
                            <span className="font-medium text-light-text-primary dark:text-dark-text-primary ">{notif.text}</span>
                        </div>


                    </div>
                    <div className="flex basis-1/3 flex-col justify-between items-center">
                        
                        
                        <div className={`${priorityStyles[notif.priority]} border-2 rounded-md w-full p-1 text-center text-light-text-primary dark:text-dark-text-primary`}>{notif.priority}</div>
                        <div className={`${notif.status === "open" ? "text-green-800" : notif.status === "pending" ? "text-orange-600" : "text-red-600"} w-full p-1 text-sm text-center text-light-text-primary dark:text-dark-text-primary`}>{notif.status}</div>

                    </div>
                </li>
            )
            )}
        </ul>
    )



}