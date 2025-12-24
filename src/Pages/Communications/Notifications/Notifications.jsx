import React from "react";


export default function Notifications() {
    const notifications = [
        {
            id: 1,
            firstName: "سروش",
            lastName: "مرادی",
            role: "مدیر",
            message: "این پیام مربوط به اطلاعیه مهم است.",
            read: true,
            avatarUrl: "",
            style: { direction: "rtl", textAlign: "right" },
            urgency: "high"
        },
        {
            id: 2,
            firstName: "مریم",
            lastName: "احمدی",
            role: "کاربر",
            message: "لطفاً راهنمایی بیشتری بدهید.",
            read: false,
            avatarUrl: "",
            style: { direction: "rtl", textAlign: "right" },
            urgency: "medium"
        },
        {
            id: 3,
            firstName: "علی",
            lastName: "رضایی",
            role: "کاربر",
            message: "مشکل من با ثبت سفارش حل شد.",
            read: true,
            avatarUrl: "",
            style: { direction: "rtl", textAlign: "right" },
            urgency: "low"
        },
        {
            id: 4,
            firstName: "نازنین",
            lastName: "کاظمی",
            role: "مدیر",
            message: "لطفاً گزارش ماهانه را بررسی کنید.",
            read: false,
            avatarUrl: "",
            style: { direction: "rtl", textAlign: "right" },
            urgency: "medium"
        },
        {
            id: 5,
            firstName: "امیر",
            lastName: "حسینی",
            role: "کاربر",
            message: "پیام من هنوز تایید نشده است.",
            read: true,
            avatarUrl: "",
            style: { direction: "rtl", textAlign: "right" },
            urgency: "high"
        },
        {
            id: 6,
            firstName: "سارا",
            lastName: "سلیمانی",
            role: "کاربر",
            message: "از پشتیبانی بسیار راضی هستم.",
            read: true,
            avatarUrl: "",
            style: { direction: "rtl", textAlign: "right" },
            urgency: "low"
        },
        {
            id: 7,
            firstName: "رضا",
            lastName: "کاظمی",
            role: "مدیر",
            message: "اطلاعات حساب کاربری به‌روز شد.",
            read: false,
            avatarUrl: "",
            style: { direction: "rtl", textAlign: "right" },
            urgency: "medium"
        },
        {
            id: 8,
            firstName: "فاطمه",
            lastName: "محمدی",
            role: "کاربر",
            message: "سوالی داشتم درباره پرداخت‌ها.",
            read: true,
            avatarUrl: "",
            style: { direction: "rtl", textAlign: "right" },
            urgency: "medium"
        },
        {
            id: 9,
            firstName: "حسین",
            lastName: "نجفی",
            role: "کاربر",
            message: "مشکل لاگین حل شد، ممنونم.",
            read: false,
            avatarUrl: "",
            style: { direction: "rtl", textAlign: "right" },
            urgency: "low"
        },
        {
            id: 10,
            firstName: "لیلا",
            lastName: "عباسی",
            role: "مدیر",
            message: "لطفاً جلسه فردا را تایید کنید.",
            read: true,
            avatarUrl: "",
            style: { direction: "rtl", textAlign: "right" },
            urgency: "high"
        }
    ]




    return (
       <div className="grid grid-cols-2 gap-3  mx-auto p-4  dark:bg-dark-bg-surface dark:text-light-bg-surface" dir="rtl">
            {notifications.map((ticket) => (
                <div key={ticket.id} className={`flex flex-col justify-between items-start gap-4 p-4 rounded-lg border ${ticket.read ? "bg-gray-50" : "bg-white"}  dark:bg-dark-bg-surface dark:text-light-bg-surface dark:border-dark-border-light dark:hover:border-dark-border-focus duration-200 ease-in-out cursor-pointer`}>
                    <div className="w-full flex justify-start items-center gap-2">
                        <div className="flex-shrink-0">
                            <img src={ticket.avatarUrl || `https://ui-avatars.com/api/?name=${ticket.firstName}+${ticket.lastName}`}
                                alt={`${ticket.firstName} ${ticket.lastName}`}
                                className="w-12 h-12 rounded-full object-cover" />

                        </div>
                        <div>
                            <p className="font-semibold ">
                                {ticket.firstName} {ticket.lastName}
                            </p>
                            <p className="text-sm text-gray-500">{ticket.role}</p>
                        </div>

                    </div>
                    <div className="flex flex-1 flex-col justify-start h-full">

                        <div className="flex justify-start items-center gap-3">
                            <span
                                className={`text-xs font-medium px-2 py-1 rounded-full ${ticket.read ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                    }`}
                            >
                                {ticket.read ? "خوانده شده" : "خوانده نشده"}
                            </span>

                            {ticket.urgency && (
                                <span
                                    className={`text-xs font-medium px-2 py-1 rounded-full ${ticket.urgency === "high"
                                        ? "bg-red-100 text-red-800"
                                        : ticket.urgency === "medium"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : "bg-green-100 text-green-800"
                                        }`}
                                >
                                    {ticket.urgency === "high"
                                        ? "فوری"
                                        : ticket.urgency === "medium"
                                            ? "متوسط"
                                            : "کم"}
                                </span>
                            )}
                        </div>

                        <p className="mt-2 text-right line-clamp-2 py-2 px-3 border border-light-border-Brand">{ticket.message}</p>



                    </div>
                    <div className="mt-3 flex justify-end gap-2">
                        <button
                            onClick={() => onConfirm(ticket.id)}
                            className="px-3 py-1 text-sm font-medium text-dark-text-primary bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                        >
                            پاسخ
                        </button>
                              <button
                            onClick={() => onConfirm(ticket.id)}
                            className="px-3 py-1 text-sm font-medium text-dark-text-primary bg-green-600 rounded hover:bg-green-700 transition-colors"
                        >
                            خوانده شد
                        </button>



                    </div>
                </div>
            ))}

            {notifications.length === 0 && (
                <p className="text-center text-gray-400 py-8">هیچ کامنتی وجود ندارد.</p>
            )}
        </div>
    );
}
