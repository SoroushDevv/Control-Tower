import React,{useState,useEffect} from 'react';
import { MoreVertical, ExternalLink, CircleDot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



const RecentOrdersTable = () => {
  const navigate = useNavigate()
  const [isOpenActions,setIsOpenActions] =useState()
  const orders = [
    { id: 'ORD-7241', customer: 'سروش مرادی', product: 'لپ‌تاپ مک‌بوک پرو', amount: '۸۵,۰۰۰,۰۰۰', status: 'موفق', date: '۱۴۰۲/۰۹/۲۸' },
    { id: 'ORD-5122', customer: 'علی محمدی', product: 'آیفون ۱۵ پرو', amount: '۶۲,۰۰۰,۰۰۰', status: 'در انتظار', date: '۱۴۰۲/۰۹/۲۷' },
    { id: 'ORD-3120', customer: 'سارا احمدی', product: 'هدفون سونی', amount: '۱۵,۵۰۰,۰۰۰', status: 'لغو شده', date: '۱۴۰۲/۰۹/۲۷' },
    { id: 'ORD-1102', customer: 'رضا علوی', product: 'ساعت هوشمند', amount: '۱۲,۲۰۰,۰۰۰', status: 'موفق', date: '۱۴۰۲/۰۹/۲۶' },
    { id: 'ORD-0982', customer: 'مریم رجبی', product: 'کیبورد مکانیکی', amount: '۴,۸۰۰,۰۰۰', status: 'موفق', date: '۱۴۰۲/۰۹/۲۵' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'موفق': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'در انتظار': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'لغو شده': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="w-full bg-light-bg-surfaceAlt dark:bg-dark-bg-surfaceAlt border border-light-border dark:border-gray-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <CircleDot size={18} className="text-blue-500" />
          </div>
          <h3 className="ct-title">آخرین سفارش‌ها</h3>
        </div>
        <button className="flex items-center gap-1 text-xs font-semibold text-blue-500 hover:text-blue-600 transition-colors">
          مشاهده همه <ExternalLink size={14} />
        </button>
      </div>

      {/* Table Area */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <table className="w-full text-right">
          <thead>
            <tr className="bg-gray-50/50 dark:bg-gray-800/30 text-gray-400 text-xs font-medium uppercase tracking-wider">
              <th className="px-6 py-4">شناسه سفارش</th>
              <th className="px-6 py-4">مشتری</th>
              <th className="px-6 py-4">محصول</th>
              <th className="px-6 py-4">مبلغ (تومان)</th>
              <th className="px-6 py-4">وضعیت</th>
              <th className="px-6 py-4 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {orders.map((order, idx) => (
              <tr 
              key={idx} 
              className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors group cursor-pointer"
              onClick = {() => navigate(`/orders/${order.id}`)}
              >
                <td className="px-6 py-4 text-sm font-mono text-gray-500 dark:text-gray-400">
                  {order.id}
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold dark:text-gray-200">{order.customer}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  {order.product}
                </td>
                <td className="px-6 py-4 text-sm font-bold dark:text-gray-200">
                  {order.amount}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${getStatusStyle(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors">
                    <MoreVertical size={16} className="text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrdersTable;