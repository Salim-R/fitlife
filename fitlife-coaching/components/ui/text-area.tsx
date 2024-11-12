import * as React from "react"
import { cn } from "@/lib/utils"

// Utilisez directement React.TextareaHTMLAttributes<HTMLTextAreaElement>
const TextArea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "w-full h-32 resize-none transition-all duration-300 focus:ring-2 focus:ring-orange-500 border-gray-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
TextArea.displayName = "TextArea"

export { TextArea }