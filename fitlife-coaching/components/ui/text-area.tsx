"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, isInvalid, rows = 6, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        aria-invalid={isInvalid || props["aria-invalid"] ? true : undefined}
        data-invalid={isInvalid ? "" : undefined}
        className={cn(
          "w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-none",
          "data-[invalid]:border-red-500 data-[invalid]:ring-red-500",
          className
        )}
        {...props}
      />
    );
  }
);
TextArea.displayName = "TextArea";
