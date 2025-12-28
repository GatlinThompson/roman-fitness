import { div } from "framer-motion/client";
import React from "react";

type ToggleButtonProps = {
  toggled: boolean;
  title: string;
  OnChange: () => void;
};

export default function ToggleButton({
  toggled,
  OnChange,
  title,
}: ToggleButtonProps) {
  return (
    <div className="grid text-lg font-medium gap-1">
      <span className="text-white font-medium">{title}</span>
      <button
        type="button"
        className="w-[100px] h-[40px] rounded-3xl bg-zinc-800 border border-white-600"
        onClick={OnChange}
      >
        <div className="flex h-full text-white font-semibold p-0.5">
          <div
            className={`h-full bg-zinc-600 w-[36px] rounded-3xl transition-transform duration-300 ease-in-out flex items-center justify-center ${
              toggled ? "translate-x-[60px]" : ""
            }`}
          >
            <span className="">{toggled ? "On" : "Off"}</span>
          </div>
        </div>
      </button>
    </div>
  );
}
