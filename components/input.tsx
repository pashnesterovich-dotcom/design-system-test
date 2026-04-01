import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border border-[#2E3140] bg-[#1A1D27] px-3 py-2 text-sm text-white font-[Inter] placeholder:text-[#4B5563] hover:border-[#3E4150] focus-visible:outline-none focus-visible:border-[#60A5FA] focus-visible:ring-2 focus-visible:ring-[#60A5FA]/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:text-[#4B5563] disabled:bg-[#13151E] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
