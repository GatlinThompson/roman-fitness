type MainProps = {
  children: React.ReactNode;
  centered?: boolean;
  grid?: boolean;
  className?: string;
};

/**
 * A main layout component that centers its content and provides padding.
 * @param {React.ReactNode} children The content to be displayed inside the main layout.
 * @param {boolean} centered Optional flag to center the content vertically and horizontally.
 * @param {boolean} grid Optional flag to use a grid layout instead of flexbox.
 * @param {string} className Optional additional CSS classes to apply to the main layout.
 * @returns The rendered Main component.
 */
export default function Main({
  children,
  centered,
  grid,
  className,
}: MainProps) {
  if (grid) {
    return (
      <main className={`grid min-h-screen pt-6 md:p-6 p-2 ${className}`}>
        {children}
      </main>
    );
  }

  return (
    <main
      className={`flex flex-col gap-4 items-center md:p-6 p-2 justify-items-center min-h-screen pt-6 ${
        centered ? "justify-center" : ""
      } ${className}`}
    >
      {children}
    </main>
  );
}
