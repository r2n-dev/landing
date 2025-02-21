import React, { PropsWithChildren } from "react";
import styles from "./Timeline.module.scss";
import scssVars from "@/app/styles/_exported.module.scss";

type TimelineItemProps = {
  bulletComponent?: React.ReactNode;
  isInitial?: boolean;
  isFinal?: boolean;
  isEven?: boolean;
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
  isEven,
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
        flexDirection: isEven ? "row-reverse" : "row",
        marginRight: isEven ? `calc(50% - ${BULLET_SIZE_PX}px)` : "0",
        marginLeft: isEven ? "0" : `calc(50% - ${BULLET_SIZE_PX}px)`,
      }}
    >
      <div className={styles.connector}>
        <span
          className={styles.top}
          style={{
            visibility: isInitial ? "hidden" : "visible",
          }}
        ></span>
        <span className={styles.bullet}>{bulletComponent}</span>
        <span
          className={styles.bottom}
          style={{
            visibility: isFinal ? "hidden" : "visible",
          }}
        ></span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const DefaulBullet = () => (
  <span
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: `2px solid ${scssVars.colorPrimary}`,
    }}
  />
);

export const Timeline: React.FC<TimelineProps> = ({
  bulletComponent = <DefaulBullet />,
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
