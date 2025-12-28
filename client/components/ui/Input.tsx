"use client";

import { titleCase } from "@/utils/utils";
import { error } from "console";

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
    <div className={`grid grid-rows-2 gap-1 w-full ${className} `}>
      <label className="text-lg font-medium">{titleCase(title)}</label>
      <input
        type={type}
        {...(!name ? null : { name: title.toLocaleLowerCase() })}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="w-full bg-zinc-800 rounded-lg py-1.5 px-2 text-white border border-white-600 text-md"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
