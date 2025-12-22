import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 5;

const MOCK_PRODUCTS = [
    {
        id: "P-1001",
        name: "کیف چرم زنانه",
        createdAt: "1403/09/15",
        stock: 20,
        price: 250000,
        status: "published",
    },
    {
        id: "P-1002",
        name: "یخچال فریز اسنوا",
        createdAt: "1403/10/02",
        stock: 0,
        price: 780000,
        status: "draft",
    },
    {
        id: "P-1003",
        name: "قهوه ساز NOVA",
        createdAt: "1403/10/10",
        stock: 5,
        price: 320000,
        status: "archived",
    },
    {
        id: "P-1004",
        name: "هدفون بی‌سیم Sony",
        createdAt: "1403/10/12",
        stock: 12,
        price: 1450000,
        status: "published",
    },
    {
        id: "P-1005",
        name: "ماوس گیمینگ Logitech",
        createdAt: "1403/10/14",
        stock: 30,
        price: 690000,
        status: "published",
    },
    {
        id: "P-1006",
        name: "لپ‌تاپ ASUS TUF",
        createdAt: "1403/10/18",
        stock: 3,
        price: 32500000,
        status: "draft",
    },
    {
        id: "P-1007",
        name: "اسپیکر JBL",
        createdAt: "1403/10/20",
        stock: 0,
        price: 2100000,
        status: "archived",
    },
    {
        id: "P-1008",
        name: "ساعت هوشمند Apple",
        createdAt: "1403/10/22",
        stock: 7,
        price: 11800000,
        status: "published",
    },
    {
        id: "P-1009",
        name: "دوربین Canon EOS",
        createdAt: "1403/10/25",
        stock: 2,
        price: 28900000,
        status: "published",
    },
    {
        id: "P-1010",
        name: "کیبورد مکانیکی Redragon",
        createdAt: "1403/10/28",
        stock: 18,
        price: 1350000,
        status: "draft",
    },
    {
        id: "P-1011",
        name: "کیف چرم زنانه",
        createdAt: "1403/09/15",
        stock: 20,
        price: 250000,
        status: "published",
    },
    {
        id: "P-1012",
        name: "یخچال فریز اسنوا",
        createdAt: "1403/10/02",
        stock: 0,
        price: 780000,
        status: "draft",
    },
    {
        id: "P-1013",
        name: "قهوه ساز NOVA",
        createdAt: "1403/10/10",
        stock: 5,
        price: 320000,
        status: "archived",
    },
    {
        id: "P-1014",
        name: "هدفون بی‌سیم Sony",
        createdAt: "1403/10/12",
        stock: 12,
        price: 1450000,
        status: "published",
    },
    {
        id: "P-1015",
        name: "ماوس گیمینگ Logitech",
        createdAt: "1403/10/14",
        stock: 30,
        price: 690000,
        status: "published",
    },
    {
        id: "P-1016",
        name: "لپ‌تاپ ASUS TUF",
        createdAt: "1403/10/18",
        stock: 3,
        price: 32500000,
        status: "draft",
    },
    {
        id: "P-1017",
        name: "اسپیکر JBL",
        createdAt: "1403/10/20",
        stock: 0,
        price: 2100000,
        status: "archived",
    },
    {
        id: "P-1018",
        name: "ساعت هوشمند Apple",
        createdAt: "1403/10/22",
        stock: 7,
        price: 11800000,
        status: "published",
    },
    {
        id: "P-1019",
        name: "دوربین Canon EOS",
        createdAt: "1403/10/25",
        stock: 2,
        price: 28900000,
        status: "published",
    },
    {
        id: "P-1020",
        name: "کیبورد مکانیکی Redragon",
        createdAt: "1403/10/28",
        stock: 18,
        price: 1350000,
        status: "draft",
    },
];

export default function ProductsTable() {
    const [page, setPage] = useState(1);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setVisibleProducts(
                MOCK_PRODUCTS.slice(0, page * PAGE_SIZE)
            );
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [page]);

    const renderStatus = (status) => {

        const config = {
            draft: {
                label: "پیش‌نویس",
                className:
                    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
            },
            published: {
                label: "منتشر شده",
                className:
                    "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
            },
            archived: {
                label: "آرشیو",
                className:
                    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
            },
        };

        const current = config[status];

        return (
            <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${current.className}`}
            >
                {current.label}
            </span>
        );
    };

    return (
        <div className="w-full overflow-x-auto rounded-2xl border border-dark-border dark:border-light-border dark:bg-light-bg-surface shadow-surface-dark">
            <table className="w-full border-collapse text-sm text-right">
                <thead>
                    <tr className="bg-dark-bg-surfaceAlt text-dark-text-secondary">
                        <th className="px-4 py-3 font-medium">نام محصول</th>
                        <th className="px-4 py-3 font-medium">تاریخ ساخت</th>
                        <th className="px-4 py-3 font-medium text-center">موجودی</th>
                        <th className="px-4 py-3 font-medium text-center">قیمت</th>
                        <th className="px-4 py-3 font-medium">وضعیت انتشار</th>
                    </tr>
                </thead>

                <tbody>
                    {visibleProducts.map((product) => (
                        <tr
                            onClick={() => navigate(`${product.id}`)}
                            key={product.id}
                            className="group border-t border-dark-border-soft text-light-text-primary hover:text-dark-text-primary hover:bg-dark-bg-surfaceAlt transition-colors cursor-pointer"
                        >
                            <td className="px-4 py-3 font-medium text-dark-text-secondary group-hover:text-light-accent">
                                {product.name}
                            </td>
                            <td className="px-4 py-3 text-dark-text-secondary">
                                {product.createdAt}
                            </td>
                            <td className="px-4 py-3 text-center">
                                {product.stock}
                            </td>
                            <td className="px-4 py-3 text-center">
                                <span className="inline-flex min-w-[32px] justify-center rounded-md bg-dark-primary-soft text-dark-primary px-2 py-1 font-semibold">
                                    {product.price.toLocaleString()} تومان
                                </span>
                            </td>
                            <td className="px-4 py-3">
                                {renderStatus(product.status)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {visibleProducts.length < MOCK_PRODUCTS.length && (
                <div className="flex justify-center py-4">
                    <button
                        onClick={() => setPage((p) => p + 1)}
                        className="px-6 py-2 rounded-lg text-sm font-medium
                       bg-dark-primary text-light-text-primary
                       hover:bg-dark-primary-hover transition-colors"
                    >
                        بارگذاری بیشتر
                    </button>
                </div>
            )}

            {loading && (
                <div className="flex justify-center py-4 text-sm text-gray-500">
                    در حال بارگذاری...
                </div>
            )}
        </div>
    );
}
