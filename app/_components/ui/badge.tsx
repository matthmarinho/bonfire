import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/app/_lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border-2 text-black border-border dark:border-darkBorder px-2.5 font-base font-semibold py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-main",
        destructive: "bg-destructive",
        positive: "bg-tertiary",
        neutral: "bg-white dark:bg-secondaryBlack dark:text-darkText",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
