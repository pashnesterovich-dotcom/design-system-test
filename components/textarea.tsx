import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full resize-y rounded-lg border border-[#2E3140] bg-[#1A1D27] px-3 py-2 text-sm text-white font-[Inter] placeholder:text-[#4B5563] hover:border-[#3E4150] focus-visible:outline-none focus-visible:border-[#60A5FA] focus-visible:ring-2 focus-visible:ring-[#60A5FA]/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:text-[#4B5563] disabled:bg-[#13151E] transition-colors",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
