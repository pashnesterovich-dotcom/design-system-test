import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2 py-0.5 text-[13px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-[#13151E]",
  {
    variants: {
      variant: {
        default:
          "bg-[#60A5FA]/15 text-[#60A5FA]",
        secondary:
          "bg-[#2E3140] text-[#8B8FA3]",
        success:
          "bg-[#34D399]/15 text-[#34D399]",
        warning:
          "bg-[#FBBF24]/15 text-[#FBBF24]",
        destructive:
          "bg-[#F87171]/15 text-[#F87171]",
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
