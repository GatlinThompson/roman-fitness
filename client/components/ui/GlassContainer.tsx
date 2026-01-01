import React from "react";
import styles from "./GlassContainer.module.css";

type GlassContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassContainer({
  children,
  className,
}: GlassContainerProps) {
  return (
    <div className={`${styles["glass-card"]} w-full rounded-lg ${className}`}>
      {children}
    </div>
  );
}
