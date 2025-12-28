"use client";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  color?: string;
};

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
  color,
}: ButtonProps) {
  return (
    <div className={`text-center ${className}`}>
      <button
        onClick={onClick}
        type={type}
        className={`bg-neutral-900 w-full p-2 rounded-lg font-bold text-white ${
          color === "red" ? "bg-red-600 hover:bg-red-700" : ""
        }`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}
