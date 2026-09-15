import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

/*
 * Decorative icon container replacing Mantine ThemeIcon: inline-flex,
 * line-height 1, 1px transparent border, Mantine sizes (xs 18px, sm 22px,
 * md 28px, lg 34px, xl 44px). Default radius and variant match the landing
 * page's ThemeIcon usage (radius "xl", variant "light").
 */
const iconBadgeVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center rounded-4xl border border-transparent leading-none select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-primary-light text-primary-light-foreground",
      },
      size: {
        xs: "size-4.5",
        sm: "size-5.5",
        md: "size-7",
        lg: "size-8.5",
        xl: "size-11",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  }
)

function IconBadge({
  className,
  variant = "secondary",
  size = "md",
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof iconBadgeVariants>) {
  return (
    <span
      data-slot="icon-badge"
      data-variant={variant}
      data-size={size}
      aria-hidden="true"
      className={cn(iconBadgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { IconBadge, iconBadgeVariants }
