import * as React from "react"
import type { ToastProps } from "@/components/ui/toast"

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}

export interface ToastActionProps {
  altText?: string
  onClick: () => void
  children: React.ReactNode
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([])

  return {
    toasts,
    toast: (props: ToastProps) => {
      const id = Math.random().toString(36).slice(2)
      setToasts((prev) => [...prev, { ...props, id }])
    },
    dismiss: (toastId?: string) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== toastId))
    },
  }
}