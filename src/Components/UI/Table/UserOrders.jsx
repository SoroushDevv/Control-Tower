import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const MOCK_ORDERS = [
    {
        id: "ORD-1001",
        userId: "u1",
        date: "1403/10/20",
        total: 1250000,
        status: "delivered",
        payment: "آنلاین",
    },
    {
        id: "ORD-1002",
        userId: "u2",
        date: "1403/10/22",
        total: 780000,
        status: "pending",
        payment: "در محل",
    },
    {
        id: "ORD-1003",
        userId: "u1",
        date: "1403/10/25",
        total: 320000,
        status: "paid",
        payment: "آنلاین",
    },
];

export default function OrdersTable({ userId, darkMode = true }) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);

        // در پروژه واقعی → fetch با userId
        const userOrders = MOCK_ORDERS.filter(
            (order) => order.userId === userId
        );

        setOrders(userOrders);
        setLoading(false);
    }, [userId]);

    const renderStatus = (status) => {
        const config = {
            pending: {
                label: "در انتظار پرداخت",
                className:
                    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
            },
            paid: {
                label: "پرداخت شده",
                className:
                    "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
            },
            shipped: {
                label: "ارسال شده",
                className:
                    "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
            },
            delivered: {
                label: "تحویل شده",
                className:
                    "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
            },
            canceled: {
                label: "لغو شده",
                className:
                    "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
            },
        };

        const current = config[status] || {
            label: status,
            className:
                "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
        };

        return (
            <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${current.className}`}
            >
                {current.label}
            </span>
        );
    };

    return (
        <div className={`w-full ${darkMode ? "dark" : ""}`}>
            <div className="w-full overflow-x-auto rounded-lg shadow bg-white dark:bg-gray-900">
                <table className="min-w-full text-sm text-center">
                    <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                        <tr>
                            <th className="px-4 py-3 text-light-text-primary">شماره سفارش</th>
                            <th className="px-4 py-3 text-light-text-primary">تاریخ</th>
                            <th className="px-4 py-3 text-light-text-primary">مبلغ</th>
                            <th className="px-4 py-3 text-light-text-primary">وضعیت</th>
                            <th className="px-4 py-3 text-light-text-primary">پرداخت</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
                        {loading ? (
                            <tr>
                                <td colSpan="5" className="py-10">
                                    <div className="flex flex-col items-center gap-3 py-4 px-6">
                                        {/* Spinner */}
                                        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            در حال بارگذاری سفارشات...
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ) : orders.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="py-12">
                                    <div className="flex flex-col items-center gap-3 text-gray-500 dark:text-gray-400 py-4 px-6">
                                        <span className="text-sm">
                                            سفارشی برای این کاربر ثبت نشده است
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            orders.map((order) => (
                                <tr
                                    onClick={() => navigate(`#`)}
                                    key={order.id}
                                    className="border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                                >
                                    <td className="px-4 py-3">{order.id}</td>
                                    <td className="px-4 py-3">{order.date}</td>
                                    <td className="px-4 py-3">
                                        {order.total.toLocaleString()} تومان
                                    </td>
                                    <td className="px-4 py-3">
                                        {renderStatus(order.status)}
                                    </td>
                                    <td className="px-4 py-3">{order.payment}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
