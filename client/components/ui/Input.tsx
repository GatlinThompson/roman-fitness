"use client";

import { titleCase } from "@/utils/utils";
import styles from "./Input.module.css";

type InputProps = {
  title: string;
  type?: "text" | "number" | "email" | "password";
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  name?: boolean;
  className?: string;
};

export default function Input({
  title,
  name = true,
  onChange,
  value,
  type = "text",
  placeholder,
  error,
  className,
}: InputProps) {
  return (
    <div className={`grid grid-rows-2 w-full ${className} `}>
      <label className="text-lg font-semibold font-montserrat">
        {titleCase(title)}
      </label>
      <input
        type={type}
        {...(!name ? null : { name: title.toLocaleLowerCase() })}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`w-full glass-black rounded-lg py-2 px-3 text-white text-md font-montserrat ${styles["input-border"]}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
