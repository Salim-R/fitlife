"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BaseProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends BaseProps {
  isInvalid?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", isInvalid, leftIcon, rightIcon, ...props }, ref) => {
    const hasLeft = Boolean(leftIcon);
    const hasRight = Boolean(rightIcon);

    return (
      <div className="relative">
        {hasLeft && (
          <span className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-muted-foreground peer-focus:text-foreground">
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          type={type}
          aria-invalid={isInvalid || props["aria-invalid"] ? true : undefined}
          data-invalid={isInvalid ? "" : undefined}
          className={cn(
            "peer flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
            "disabled:cursor-not-allowed disabled:opacity-50",
            hasLeft && "pl-9",
            hasRight && "pr-9",
            "data-[invalid]:border-red-500 data-[invalid]:ring-red-500",
            className
          )}
          {...props}
        />

        {hasRight && (
          <span className="absolute inset-y-0 right-3 inline-flex items-center text-muted-foreground peer-focus:text-foreground">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
// Pas de `export { Input }` ici, on a déjà `export const Input`.
