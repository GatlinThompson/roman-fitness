import styles from "./GrayGlassContainer.module.css";

type GrayGlassContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A container component that provides a gray glass card effect
 *
 * @param {React.ReactNode} children The content to be displayed inside the gray glass container.
 * @param {string} className Optional additional CSS classes to apply to the container.
 * @returns The rendered GrayGlassContainer component.
 */

export default function GrayGlassContainer({
  children,
  className,
}: GrayGlassContainerProps) {
  return (
    <div
      className={`${className} ${styles["gray-glass-card"]} p-2 w-full rounded-md shadow-2xl`}
    >
      {children}
    </div>
  );
}
