import styles from "./GlassContainer.module.css";

type GlassContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * A container component that provides a glass card effect
 * @param {React} children The content to be displayed inside the glass container.
 * @param {string} className Optional additional CSS classes to apply to the container.
 * @returns The rendered GlassContainer component.
 */
export default function GlassContainer({
  children,
  className,
  style,
}: GlassContainerProps) {
  return (
    <div
      className={`${styles["glass-card"]} w-full rounded-lg md:p-8 p-3 pb-8  relative ${className}`}
      style={style}
    >
      <div
        className={`${styles["glass-background"]} w-full h-full absolute top-0 left-0 -z-10 opacity-30`}
      ></div>
      {children}
    </div>
  );
}
