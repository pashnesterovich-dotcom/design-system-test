import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-[13px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#0061FE] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[#0061FE]/10 text-[#0061FE]",
        success: "bg-[#46BE00]/10 text-[#46BE00]",
        warning: "bg-[#F59E0B]/10 text-[#F59E0B]",
        destructive: "bg-[#FF7373]/10 text-[#FF7373]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
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
