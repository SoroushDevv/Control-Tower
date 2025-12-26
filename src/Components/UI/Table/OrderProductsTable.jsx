import React from "react";
import { Star, ExternalLink, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderProductsTable = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: "PR-101",
      name: "هودی مردانه",
      image: "/Images/products/hoodi.jpg",
      color: "مشکی",
      size: "L",
      price: 850000,
      quantity: 2,
      rating: 4.5,
    },
    {
      id: "PR-102",
      name: "کفش اسپرت",
      image: "/Images/products/shoe.jpg",
      color: "سفید",
      size: "42",
      price: 2100000,
      quantity: 1,
      rating: 4.8,
    },
    {
      id: "PR-103",
      name: "تیشرت نخی",
      image: "/Images/products/tshirt.jpg",
      color: "آبی",
      size: "M",
      price: 420000,
      quantity: 3,
      rating: 4.2,
    },
  ];

  const formatPrice = (value) =>
    value.toLocaleString("fa-IR") + " تومان";

  return (
    <div className="w-full bg-light-bg-surfaceAlt dark:bg-dark-bg-surfaceAlt border border-light-border dark:border-gray-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <ShoppingBag size={18} className="text-blue-500" />
          </div>
          <h3 className="ct-title">جزئیات سفارش </h3>
        </div>
        <button className="flex items-center gap-1 text-xs font-semibold text-blue-500 hover:text-blue-600 transition-colors">
          مشاهده همه <ExternalLink size={14} />
        </button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <table className="w-full text-right">
          <thead>
            <tr className="bg-gray-50/50 dark:bg-gray-800/30 text-gray-400 text-xs font-medium">
              <th className="px-6 py-4">جزئیات محصول</th>
              <th className="px-6 py-4">قیمت</th>
              <th className="px-6 py-4">تعداد</th>
              <th className="px-6 py-4">امتیاز</th>
              <th className="px-6 py-4">قیمت نهایی</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {orders.map((item) => {
              const totalPrice = item.price * item.quantity;

              return (
                <tr
                  key={item.id}
                  onClick={() => navigate(`/products/${item.id}`)}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors cursor-pointer"
                >
                  {/* Product Details */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover border dark:border-gray-700"
                      />
                      <div className="flex flex-col justify-between items-start">
                        <p className="text-sm font-semibold dark:text-gray-200">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex flex-col justify-between items-start">
                            <span> رنگ: {item.color}</span>
                            <span>سایز: {item.size}</span>
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 text-sm font-medium dark:text-gray-200">
                    {formatPrice((item.price).toLocaleString())}
                  </td>

                  {/* Quantity */}
                  <td className="px-6 py-4 text-sm dark:text-gray-300">
                    {item.quantity}
                  </td>

                  {/* Rating */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-semibold">
                        {item.rating}
                      </span>
                    </div>
                  </td>

                  {/* Final Price */}
                  <td className="px-6 py-4 text-sm font-bold text-green-600 dark:text-green-400">
                    {formatPrice(totalPrice.toLocaleString())}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderProductsTable;
