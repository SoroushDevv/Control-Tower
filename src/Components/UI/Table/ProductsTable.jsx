import { useState, useEffect } from "react";

const MOCK_PRODUCTS = [
  {
    id: "P-101",
    name: "محصول ۱",
    createdAt: "1403/09/15",
    stock: 20,
    price: 250000,
    status: "published",
  },
  {
    id: "P-102",
    name: "محصول ۲",
    createdAt: "1403/10/02",
    stock: 0,
    price: 780000,
    status: "draft",
  },
  {
    id: "P-103",
    name: "محصول ۳",
    createdAt: "1403/10/10",
    stock: 5,
    price: 320000,
    status: "archived",
  },
];

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // در پروژه واقعی → fetch از API
    setProducts(MOCK_PRODUCTS);
    setLoading(false);
  }, []);

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
          {loading ? (
            <tr>
              <td colSpan="5" className="py-10">
                <div className="flex flex-col items-center gap-3 py-4 px-6">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    در حال بارگذاری محصولات...
                  </span>
                </div>
              </td>
            </tr>
          ) : products.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-12">
                <div className="flex flex-col items-center gap-3 text-gray-500 dark:text-gray-400 py-4 px-6">
                  <span className="text-sm">هیچ محصولی ثبت نشده است</span>
                </div>
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr
                key={product.id}
                className="group w-full border-t border-dark-border-soft text-dark-text-primary hover:bg-dark-bg-surfaceAlt transition-colors cursor-pointer"
              >
                <td className="px-4 py-3 font-medium text-dark-text-secondary group-hover:text-light-accent">
                  {product.name}
                </td>
                <td className="px-4 py-3 text-dark-text-secondary">
                  {product.createdAt}
                </td>
                <td className="px-4 py-3 text-center">{product.stock}</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex min-w-[32px] justify-center rounded-md bg-dark-primary-soft text-dark-primary px-2 py-1 font-semibold">
                    {product.price.toLocaleString()} تومان
                  </span>
                </td>
                <td className="px-4 py-3">{renderStatus(product.status)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
