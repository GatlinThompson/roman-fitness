"use client";

import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  roundedTop?: boolean;
  roundedBottom?: boolean;
  disabled?: boolean;
  className?: string;
  color?: string;
  to?: string;
  bordered?: boolean;
  borderedBottom?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
  color,
  to,
  roundedTop = false,
  roundedBottom = false,
  bordered = false,
  borderedBottom = false,
}: ButtonProps) {
  if (to) {
    return (
      <div className={`text-center ${className}`}>
        <Link
          href={to}
          className={`w-full p-2 font-bold text-white font-montserrat glass-black ${
            color === "red" ? "bg-red-600 hover:bg-red-700" : ""
          } ${roundedTop ? "rounded-t-lg" : "rounded-lg"} ${
            roundedBottom ? "rounded-b-lg" : "rounded-lg"
          } ${bordered ? styles.bordered : ""} ${
            borderedBottom ? styles["bordered-bottom"] : ""
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
        className={`w-full p-2 font-bold text-white font-montserrat glass-black ${
          color === "red" ? "bg-red-600 hover:bg-red-700" : ""
        }  ${roundedBottom ? "rounded-b-lg" : "rounded-lg"} ${
          bordered ? styles.bordered : ""
        } ${borderedBottom ? styles["bordered-bottom"] : ""}`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}
