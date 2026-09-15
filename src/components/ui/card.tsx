import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

/*
 * Defaults mirror the Mantine Card this replaces (radius "lg", withBorder):
 * a padded flex column with no shadow. `padding` matches Mantine's
 * Card padding prop (xs 10px, sm 12px, md 16px, lg 20px, xl 32px).
 */
const cardVariants = cva(
  "group/card relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card p-(--card-spacing) text-card-foreground",
  {
    variants: {
      padding: {
        xs: "[--card-spacing:--spacing(2.5)]",
        sm: "[--card-spacing:--spacing(3)]",
        md: "[--card-spacing:--spacing(4)]",
        lg: "[--card-spacing:--spacing(5)]",
        xl: "[--card-spacing:--spacing(8)]",
      },
    },
    defaultVariants: {
      padding: "md",
    },
  }
)

function Card({
  className,
  padding = "md",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      data-padding={padding}
      className={cn(cardVariants({ padding }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-heading text-h3", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-col", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
}
