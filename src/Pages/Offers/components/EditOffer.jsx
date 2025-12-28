import React, { useState, useEffect } from "react"
import Switch from "@/Components/UI/Switch/Switch"
import Input from "@/Components/UI/Input/Input"
import Button from "@/Components/UI/Button/Button"

const EditOffer = ({ open,offer, onOpenChange, initialData, onSubmit }) => {
  if (!open) return null

  const [isEnabled, setIsEnabled] = useState(open)
  const [code, setCode] = useState("")
  const [percent, setPercent] = useState("")
  const [limit, setLimit] = useState("")
  const [expireDate, setExpireDate] = useState("")

  useEffect(() => {
    if (initialData) {
      setCode(initialData.code || "")
      setPercent(initialData.discountPercent || "")
      setLimit(initialData.usageLimit || "")
      setExpireDate(initialData.expiresAt || "")
      setIsEnabled(initialData.isActive || false)
    }
  }, [initialData])

  const handleSubmit = () => {
    onSubmit({
      ...initialData,
      code,
      discountPercent: Number(percent),
      usageLimit: Number(limit),
      expiresAt: expireDate,
      isActive: isEnabled,
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-light-bg-overlay dark:bg-dark-bg-overlay"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="w-full max-w-lg rounded-2xl p-6 bg-light-bg-surface dark:bg-dark-bg-surface border border-light-border dark:border-dark-border shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4">
          <span className="font-bold text-lg text-light-text-primary dark:text-dark-text-primary">
            ویرایش کد تخفیف
          </span>

          <div className="flex flex-col gap-2">
            <label htmlFor="code">کد تخفیف</label>
            <Input id="code" value={offer.code} onChange={(e) => setCode(e.target.value)} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div>
              <label>درصد تخفیف</label>
              <Input
                type="number"
                value={offer.discountPercent}
                onChange={(e) => setPercent(e.target.value)}
              />
            </div>
            <div>
              <label>تعداد</label>
              <Input
                type="number"
                value={offer.usageLimit}
                onChange={(e) => setLimit(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label>تاریخ انقضا</label>
            <Input
              type="date"
              value={offer.expiresAt}
              onChange={(e) => setExpireDate(e.target.value)}
            />
          </div>

          <div className="w-full flex justify-between items-center gap-3 border border-dark-border-soft py-3 px-4 rounded-md">
            <div className="flex flex-col">
              <span>فعال</span>
              <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                کد را فعال یا غیر فعال کنید
              </span>
            </div>

            
            <Switch enabled={isEnabled} onToggle={() => setIsEnabled(!isEnabled)} />
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="primary" onClick={handleSubmit}>
              ذخیره
            </Button>
            <Button variant="neutral" onClick={() => onOpenChange(false)}>
              لغو
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditOffer
