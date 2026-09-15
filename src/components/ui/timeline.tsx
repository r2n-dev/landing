import * as React from "react"
import { cn } from "cn"

/*
 * Replaces Mantine Timeline/TimelineItem with the same props and geometry
 * (left alignment): offset = bulletSize / 2 + lineWidth / 2, items spaced
 * 32px apart, inactive line/bullet in the card border color, active ones in
 * primary. The bullet center uses the page background, as the site's former
 * Mantine Timeline override did.
 */

interface TimelineItemState {
  __active?: boolean
  __lineActive?: boolean
}

interface TimelineProps extends React.ComponentProps<"ol"> {
  /** Index of the last active item; items up to it render active. */
  active?: number
  /** Bullet size in px. */
  bulletSize?: number
  /** Line and bullet border width in px. */
  lineWidth?: number
}

function Timeline({
  active = -1,
  bulletSize = 20,
  lineWidth = 4,
  className,
  style,
  children,
  ...props
}: TimelineProps) {
  const items = React.Children.toArray(children).filter(React.isValidElement)

  return (
    <ol
      data-slot="timeline"
      className={cn(
        "[--tl-offset:calc(var(--tl-bullet-size)/2+var(--tl-line-width)/2)] ps-(--tl-offset)",
        className
      )}
      style={
        {
          "--tl-bullet-size": `${bulletSize / 16}rem`,
          "--tl-line-width": `${lineWidth / 16}rem`,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {items.map((item, index) =>
        React.cloneElement(item as React.ReactElement<TimelineItemState>, {
          __active: active >= index,
          __lineActive: active - 1 >= index,
        })
      )}
    </ol>
  )
}

interface TimelineItemProps
  extends Omit<React.ComponentProps<"li">, "title">,
    TimelineItemState {
  title?: React.ReactNode
  /** Optional bullet content (icon); renders a filled bullet. */
  bullet?: React.ReactNode
}

function TimelineItem({
  title,
  bullet,
  className,
  children,
  __active,
  __lineActive,
  ...props
}: TimelineItemProps) {
  return (
    <li
      data-slot="timeline-item"
      data-active={__active || undefined}
      data-line-active={__lineActive || undefined}
      className={cn(
        "relative ps-(--tl-offset) text-foreground not-first:mt-8",
        "before:pointer-events-none before:absolute before:top-0 before:-bottom-8 before:start-[calc(var(--tl-line-width)*-1)] before:border-s-(length:--tl-line-width) before:border-card-border last:before:hidden data-line-active:before:border-primary",
        className
      )}
      {...props}
    >
      <div
        data-slot="timeline-item-bullet"
        data-active={__active || undefined}
        data-with-child={bullet ? true : undefined}
        className="absolute -start-(--tl-offset) top-0 flex size-(--tl-bullet-size) items-center justify-center rounded-full border-(length:--tl-line-width) border-card-border bg-background text-foreground data-active:border-primary data-active:text-white data-with-child:bg-card-border data-active:data-with-child:bg-primary"
      >
        {bullet}
      </div>

      <div data-slot="timeline-item-body" className="ps-(--tl-offset)">
        {title ? (
          <div
            data-slot="timeline-item-title"
            className="mb-1.25 leading-none font-medium"
          >
            {title}
          </div>
        ) : null}
        <div data-slot="timeline-item-content">{children}</div>
      </div>
    </li>
  )
}

export { Timeline, TimelineItem }
export type { TimelineProps, TimelineItemProps }
