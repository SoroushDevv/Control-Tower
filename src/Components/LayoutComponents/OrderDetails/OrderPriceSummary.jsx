import React, { useMemo } from "react";

const OrderPriceSummary = ({
  items = [],
  discountPercent = 0,
  discountCode,
  shippingCost = 0,
  taxPercent = 0,
  currency = "تومان",
  className = "",
}) => {
  const summary = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const discount =
      discountPercent > 0
        ? (subtotal * discountPercent) / 100
        : 0;

    const tax =
      taxPercent > 0
        ? (subtotal - discount) * (taxPercent / 100)
        : 0;

    const total =
      subtotal - discount + shippingCost + tax;

    return {
      subtotal,
      discount,
      tax,
      total,
    };
  }, [items, discountPercent, shippingCost, taxPercent]);

  const format = (value) =>
    `${value.toLocaleString()} ${currency}`;

  return (
    <div
      className={` w-fit flex justify-center items-start flex-col gap-3 text-sm ${className}`}
    >
      <Row
        label="جمع کل کالاها"
        value={format(summary.subtotal)}

      />

      {summary.discount > 0 && (
        <Row
          label={`تخفیف (${discountCode})`}
          value={`-${format(summary.discount)}`}

          danger
        />
      )}

      {shippingCost > 0 && (
        <Row
          label="هزینه ارسال"
          value={format(shippingCost)}

        />
      )}

      {taxPercent > 0 && (
        <Row
          label="مالیات برآوردی"
          value={format(summary.tax)}

        />
      )}

      <Row
        label={`مبلغ نهایی (${currency})`}
        value={format(summary.total)}
        bold
        success
      />
    </div>
  );
};

const Row = ({ label, value, bold, danger, success }) => {
  const className = [
    "flex justify-between gap-2",
    bold && "font-bold",
    danger && "text-red-500",
    success && "text-green-600 dark:text-green-400",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <span className="text-gray-500 dark:text-gray-400">
        {label}
      </span>
      <span>{value}</span>
    </div>
  );
};

export default OrderPriceSummary;
