"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // vérifie que ce chemin existe bien

export const Accordion = AccordionPrimitive.Root;

type ItemProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  ItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

type TriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>;
export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  TriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium",
        "transition-colors duration-200 hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        // rotation de l’icône quand ouvert
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        className="h-4 w-4 shrink-0 transition-transform duration-200 motion-reduce:duration-0"
        aria-hidden="true"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

type ContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;
export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  ContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm",
      // animations définies dans tailwind.config (accordion-up/down)
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      "motion-reduce:animate-none",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
