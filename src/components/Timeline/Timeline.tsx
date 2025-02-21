import React, { PropsWithChildren } from "react";
import styles from "./Timeline.module.scss";

type TimelineItemProps = {
  bulletComponent?: React.ReactNode;
  isInitial?: boolean;
  isFinal?: boolean;
  isOdd?: boolean;
};

type TimelineProps = {
  bulletComponent?: React.ReactNode;
  items: Array<React.ReactNode>;
};

const TimelineItem: React.FC<PropsWithChildren<TimelineItemProps>> = ({
  bulletComponent,
  isInitial,
  isFinal,
  children,
  isOdd,
}) => {
  if (!bulletComponent) {
    throw new Error("bulletComponent is required");
  }

  if (isInitial && isFinal) {
    throw new Error("TimelineItem cannot be both initial and final");
  }

  const BULLET_SIZE_PX = 10;

  return (
    <div
        className={styles.timelineItem}
        style={{
            flexDirection: isOdd ? "row-reverse" : "row",
            marginLeft: isOdd ? "0" : `calc(50% - ${BULLET_SIZE_PX}px)`,
            marginRight: isOdd ? `calc(50% - ${BULLET_SIZE_PX}px)` : "0",
        }}
    >
      <div className={styles.connector}>
        <span className={styles.top} style={{
            visibility: isInitial ? "hidden" : "visible",
        }}></span>
        <span className={styles.bullet}>
            {bulletComponent}
        </span>
        <span className={styles.bottom} style={{
            visibility: isFinal ? "hidden" : "visible",
        }}></span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ bulletComponent, items }) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          bulletComponent={bulletComponent}
          isInitial={index === 0}
          isFinal={index === items.length - 1}
          isOdd={index % 2 === 1}
        >
            {item}
        </TimelineItem>
      ))}
    </div>
  );
};
