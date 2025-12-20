

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";





export default function UsersTable() {
const navigate = useNavigate()


    const users = [
        {
            id: 1,
            name: "سروش مرادی",
            city: "تهران",
            ordersCount: 12,
            totalPurchase: 8450000,
            registeredAt: "1402/03/18",
            lastPurchase: "1403/09/02",
        },
        {
            id: 2,
            name: "علی رضایی",
            city: "اصفهان",
            ordersCount: 0,
            totalPurchase: 0,
            registeredAt: "1403/01/10",
            lastPurchase: null,
        },
           {
            id: 2,
            name: "علی رضایی",
            city: "اصفهان",
            ordersCount: 0,
            totalPurchase: 0,
            registeredAt: "1403/01/10",
            lastPurchase: null,
        },
           {
            id: 2,
            name: "علی رضایی",
            city: "اصفهان",
            ordersCount: 0,
            totalPurchase: 0,
            registeredAt: "1403/01/10",
            lastPurchase: null,
        },
           {
            id: 2,
            name: "علی رضایی",
            city: "اصفهان",
            ordersCount: 0,
            totalPurchase: 0,
            registeredAt: "1403/01/10",
            lastPurchase: null,
        },
           {
            id: 2,
            name: "علی رضایی",
            city: "اصفهان",
            ordersCount: 0,
            totalPurchase: 0,
            registeredAt: "1403/01/10",
            lastPurchase: null,
        },
    ];




    return (
        <div
            className="
        w-full overflow-x-auto
        rounded-2xl
        border border-dark-border dark:border-light-border
        dark:bg-light-bg-surface
        shadow-surface-dark

      "
        >
            <table className="w-full border-collapse text-sm">
                <thead>
                    <tr className="bg-dark-bg-surfaceAlt text-dark-text-secondary">
                        <th className="px-4 py-3 text-right font-medium">کاربر</th>
                        <th className="px-4 py-3 text-right font-medium">شهر</th>
                        <th className="px-4 py-3 text-center font-medium">تعداد سفارش</th>
                        <th className="px-4 py-3 text-right font-medium">مجموع خرید</th>
                        <th className="px-4 py-3 text-right font-medium">تاریخ ثبت‌نام</th>
                        <th className="px-4 py-3 text-right font-medium">آخرین خرید</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                
                            <tr
                                key={user.id}
                                onClick={() => navigate(`/customers/#`)}
                                className="group w-full border-t border-dark-border-soft text-dark-text-primary hover:bg-dark-bg-surfaceAlt transition-colors cursor-pointer"
                            >
                                    
                                <td className="px-4 py-3 font-medium text-light-text-primary group-hover:text-light-accent">
                                    {user.name}
                                </td>

                                <td className="px-4 py-3 text-dark-text-secondary">
                                    {user.city}
                                </td>

                                <td className="px-4 py-3 text-center">
                                    <span
                                        className="inline-flex min-w-[32px] justify-center rounded-md bg-dark-primary-soft text-dark-primary px-2 py-1 font-semibold"
                                    >
                                        {user.ordersCount}
                                    </span>
                                </td>

                                <td className="px-4 py-3 font-semibold text-dark-state-success">
                                    {user.totalPurchase.toLocaleString()} تومان
                                </td>

                                <td className="px-4 py-3 text-dark-text-muted">
                                    {user.registeredAt}
                                </td>

                                <td className="px-4 py-3">
                                    {user.lastPurchase ? (
                                        <span className="text-light-text-primary group-hover:text-light-bg-base">
                                            {user.lastPurchase}
                                        </span>
                                    ) : (
                                        <span className="text-dark-text-mutedSoft group-hover:text-light-bg-base">
                                            بدون خرید
                                        </span>
                                    )}
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
