import React from "react";

const orderSteps = [
  {
    title: "سفارش ثبت شد",
    description: "یک سفارش جدید ثبت شد.",
    datetime: "20 May, 2024",
    completed: true,
  },
  {
    title: "پردازش فروشنده",
    description: "فروشنده سفارش شما را پردازش کرده است.",
    datetime: "22 May, 2024",
    completed: true,
  },
  {
    title: "بسته‌بندی",
    description: "کالا آماده ارسال است.",
    datetime: "23 May, 2024",
    completed: true,
  },
  {
    title: "ارسال شده",
    description: "کالا توسط پیک ارسال شد.",
    datetime: "28 May, 2024",
    completed: false,
  },
  {
    title: "تحویل داده شد",
    description: "سفارش شما تحویل داده شد.",
    datetime: "2 Jun, 2024",
    completed: false,
  },
];

const OrderProgress = ({ steps = orderSteps }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded- text-light-text-primary dark:text-dark-text-primary">
      <ol className="relative border-l border-gray-300 dark:border-gray-700 ">
        {steps.map((step, idx) => (
          <li key={idx} className="mb-10 ml-6">
            {/* Circle */}
            <span
              className={`absolute -left-3 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center ${
                step.completed ? "bg-green-600" : "bg-gray-300"
              }`}
            >
              {step.completed && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            {/* Content */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-lg font-medium  ">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
              {step.datetime && (
                <span className="text-gray-400 text-sm mt-1 md:mt-0">{step.datetime}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default OrderProgress;
