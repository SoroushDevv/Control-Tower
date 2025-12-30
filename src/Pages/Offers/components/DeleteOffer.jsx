import React from "react"

export function DeleteOffer({ open, onOpenChange, offer, onConfirm, children }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-light-bg-overlay dark:bg-black/10"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="w-full max-w-md rounded-2xl p-6 bg-light-bg-surface dark:bg-dark-bg-surface border border-light-border dark:border-dark-border shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-2">
          <span className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary">
            حذف کد تخفیف
          </span>

          <span className=" flex flex-col justify-between items-start gap-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            <span>
               از حذف کد <span className="font-mono font-semibold text-light-state-danger dark:text-dark-state-danger px-1">
              {offer.code}
            </span>اطمینان دارید؟
            </span>
           
            
            <span className="text-red-500">
             این عمل غیر قابل بازگشت است
            </span>
          </span>

          {children}
        </div>

        <div className="mt-6 flex justify-start gap-3">
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-light-state-danger dark:bg-dark-state-danger text-white hover:opacity-90 transition"
          >
            حذف کن
          </button>
             <button
            onClick={() => onOpenChange(false)}
            className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-light-bg-surfaceAlt dark:hover:bg-dark-bg-surfaceAlt transition"
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  )
}
