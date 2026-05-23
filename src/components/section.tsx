import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: "none" | "sm" | "md" | "lg"
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, spacing = "md", children, ...props }, ref) => {
    const spacingClasses = {
      none: "py-0",
      sm: "py-12 md:py-16",
      md: "py-20 md:py-32",
      lg: "py-32 md:py-48",
    }

    return (
      <section
        ref={ref}
        className={cn(spacingClasses[spacing], "container mx-auto px-6", className)}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = "Section"
