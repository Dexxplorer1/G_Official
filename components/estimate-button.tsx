"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { EstimateModal } from "./estimate-modal"

interface EstimateButtonProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline"
}

export function EstimateButton({ children, className, size = "default", variant = "default" }: EstimateButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className={className} size={size} variant={variant}>
        {children}
      </Button>
      <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
