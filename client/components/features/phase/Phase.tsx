"use client";
import { BiTrash, BiPencil } from "react-icons/bi";

export type PhaseInfo = {
  id: number;
  phase_number: number;
  rpm: number;
  start_date: string;
  end_date: string;
  level: string;
};

export default function Phase(phase: PhaseInfo) {
  return (
    <li className="flex w-full gap-3">
      <div className="grow ">
        <h2 className="md:text-lg font-bold">
          Phase {phase.phase_number} - {phase.level}
        </h2>
        <div className="mt-1">
          {phase.start_date} - {phase.end_date}
        </div>
      </div>

      <div className="flex gap-4">
        <button>
          <BiPencil className="text-dark-gray text-2xl" />
        </button>

        <button>
          <BiTrash className="text-dark-gray text-2xl" />
        </button>
      </div>
    </li>
  );
}
