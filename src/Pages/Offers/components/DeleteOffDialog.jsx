import React, {useEffect,useState} from "react"


export function DeleteOffDialog({ open, onOpenChange, offCode, onConfirm }) {









  return (
    <div open={open} onOpenChange={onOpenChange}>
      <div>
        <div>
          <span>Delete discount code?</span>
          <span>
            Are you sure you want to delete <span className="font-mono font-semibold">{offCode}</span>? This action
            cannot be undone.
          </span>
        </div>
        <div>
          <button>Cancel</button>
          <button
            onClick={onConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}