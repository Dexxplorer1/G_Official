"use client"

import { X } from "lucide-react"
import { EstimateForm } from "./estimate-form"

interface EstimateModalProps {
  isOpen: boolean
  onClose: () => void
}

export function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-lg border">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>
        <div className="p-6">
          <EstimateForm onClose={onClose} isModal={true} />
        </div>
      </div>
    </div>
  )
}
