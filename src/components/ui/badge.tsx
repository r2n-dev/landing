import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

/*
 * Defaults mirror Mantine Badge: pill radius, uppercase, weight 700,
 * 0.25px tracking, 1px border, line-height = height - 2px.
 *
 * Mantine variant → shadcn variant: filled → default, light → secondary,
 * default → outline, outline → primary-outline.
 */
const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.25 overflow-hidden rounded-full border border-transparent font-bold tracking-[0.25px] whitespace-nowrap uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-primary-light text-primary-light-foreground",
        outline: "border-input bg-surface text-surface-foreground",
        "primary-outline": "border-primary-outline text-primary-outline",
        destructive: "bg-destructive text-white",
        ghost: "text-primary-light-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-4.5 px-2 text-[0.625rem] leading-4",
        default: "h-5 px-2.5 text-[0.6875rem] leading-4.5",
        lg: "h-6.5 px-3 text-[0.8125rem] leading-6",
        xl: "h-8 px-4 text-base leading-7.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
