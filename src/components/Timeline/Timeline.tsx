import React from "react";
import styles from "./Timeline.module.scss";

type TimelineItemProps = {
  bulletComponent?: React.ReactNode;
  isInitial: boolean;
  isFinal: boolean;
  isEven: boolean;
  children: React.ReactNode;
};

type TimelineProps = {
  bulletComponent?: React.ReactNode;
  items: React.ReactNode[];
};

const DefaultBullet = () => <span className={styles.defaultBullet} />;

const TimelineItem: React.FC<TimelineItemProps> = ({
  bulletComponent,
  isInitial,
  isFinal,
  isEven,
  children,
}) => {
  return (
    <div className={[styles.timelineItem, isEven ? styles.even : styles.odd].join(" ")}>
      <div className={styles.connector}>
        <span className={[styles.line, isInitial ? styles.hidden : ""].join(" ")} />
        <span className={styles.bullet}>{bulletComponent ?? <DefaultBullet />}</span>
        <span className={[styles.line, isFinal ? styles.hidden : ""].join(" ")} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({
  bulletComponent,
  items,
}) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          bulletComponent={bulletComponent}
          isInitial={index === 0}
          isFinal={index === items.length - 1}
          isEven={index % 2 === 0}
        >
          {item}
        </TimelineItem>
      ))}
    </div>
  );
};
