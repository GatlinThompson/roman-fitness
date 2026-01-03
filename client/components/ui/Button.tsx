"use client";

import Link from "next/link";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  color?: string;
  to?: string;
};

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
  color,
  to,
}: ButtonProps) {
  if (to) {
    return (
      <div className={`text-center ${className}`}>
        <Link
          href={to}
          className={`glass-black w-full p-2 rounded-lg font-bold text-white font-montserrat ${
            color === "red" ? "bg-red-600 hover:bg-red-700" : ""
          }`}
        >
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <button
        onClick={onClick}
        type={type}
        className={`glass-black w-full p-2 rounded-lg font-bold text-white font-montserrat ${
          color === "red" ? "bg-red-600 hover:bg-red-700" : ""
        }`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}
