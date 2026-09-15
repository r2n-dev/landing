import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

/*
 * Defaults mirror the Mantine Button/ActionIcon this replaces:
 * radius "xl" (rounded-4xl), weight 600, line-height 1 (kept after text-* in each size so cn does not drop it),
 * 1px border, icons keep their own size,
 * 10px section gap, start/end padding ÷ 1.5 next to an icon, 2px focus ring.
 *
 * Mantine variant → shadcn variant: filled → default, light → secondary,
 * default → outline, subtle → ghost. cta/cta-secondary are the landing
 * page's gradient and neutral calls to action.
 */
const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-4xl border border-transparent font-semibold whitespace-nowrap select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary:
          "bg-primary-light text-primary-light-foreground hover:bg-primary-light-hover aria-expanded:bg-primary-light-hover",
        outline:
          "border-input bg-surface text-surface-foreground hover:bg-surface-hover aria-expanded:bg-surface-hover",
        ghost:
          "text-primary-light-foreground hover:bg-accent aria-expanded:bg-accent",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:outline-destructive",
        link: "text-primary underline-offset-4 hover:underline",
        // Landing page calls to action (LandingActions)
        cta: "bg-linear-135/srgb from-primary to-cyan tracking-[0.01em] text-primary-foreground transition-[transform,box-shadow,border-color] duration-200 ease-[ease] hover:-translate-y-px hover:shadow-sm [&_svg]:opacity-90",
        "cta-secondary":
          "border-border bg-surface-hover tracking-[0.01em] text-foreground transition-[transform,box-shadow,border-color] duration-200 ease-[ease] hover:-translate-y-px hover:border-primary-light-foreground hover:bg-primary-light-hover hover:text-primary-light-foreground hover:shadow-sm [&_svg]:opacity-90",
      },
      size: {
        // Mantine compact-sm
        xs: "h-6.5 gap-1.5 px-2 text-xs leading-none has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5",
        // Mantine xs
        sm: "h-7.5 gap-2.5 px-3.5 text-xs leading-none has-data-[icon=inline-end]:pe-[calc(var(--spacing)*3.5/1.5)] has-data-[icon=inline-start]:ps-[calc(var(--spacing)*3.5/1.5)]",
        // Mantine sm (Mantine Button default)
        default:
          "h-9 gap-2.5 px-4.5 text-sm leading-none has-data-[icon=inline-end]:pe-3 has-data-[icon=inline-start]:ps-3",
        // Mantine md
        lg: "h-10.5 gap-2.5 px-5.5 text-base leading-none has-data-[icon=inline-end]:pe-[calc(var(--spacing)*5.5/1.5)] has-data-[icon=inline-start]:ps-[calc(var(--spacing)*5.5/1.5)]",
        // Mantine ActionIcon sizes (radius md)
        "icon-xs": "size-5.5 rounded-lg leading-none font-normal",
        "icon-sm": "size-7 rounded-lg leading-none font-normal",
        icon: "size-8.5 rounded-lg leading-none font-normal",
        "icon-lg": "size-11 rounded-lg leading-none font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
