import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#13151E] disabled:pointer-events-none disabled:bg-[#21242F] disabled:text-[#4B5563] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#60A5FA] text-white hover:bg-[#3B82F6] active:bg-[#2563EB]",
        secondary:
          "bg-[#1A1D27] text-[#60A5FA] border border-[#2E3140] hover:bg-[#21242F] hover:border-[#3E4150] active:bg-[#2E3140]",
        ghost:
          "text-[#8B8FA3] hover:bg-[#1A1D27] hover:text-white active:bg-[#21242F]",
        outline:
          "border border-[#2E3140] bg-transparent text-white hover:bg-[#1A1D27] hover:border-[#3E4150] active:bg-[#21242F]",
        destructive:
          "bg-[#F87171] text-white hover:bg-[#EF4444] active:bg-[#DC2626]",
        link: "text-[#60A5FA] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
