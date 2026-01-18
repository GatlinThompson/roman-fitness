import { p, s } from "framer-motion/client";
import React from "react";
import Phase, { PhaseInfo } from "./Phase";
import Divider from "@/components/ui/divider/Divider";

const phases = [
  {
    id: 1,
    phase_number: 1,
    rpm: 60,
    start_date: "2024-01-01",
    end_date: "2024-01-31",
    level: "Stabilization Endurance",
  },
  {
    id: 2,
    phase_number: 2,
    rpm: 80,
    level: "Strength Endurance",
    start_date: "2024-02-01",
    end_date: "2024-02-28",
  },
  {
    id: 3,
    phase_number: 3,
    rpm: 85,
    level: "Hypertrophy",
    start_date: "2024-03-01",
    end_date: "2024-03-31",
  },
  {
    id: 4,
    phase_number: 4,
    rpm: 90,
    level: "Strength",
    start_date: "2024-04-01",
    end_date: "2024-04-30",
  },
  {
    id: 5,
    phase_number: 5,
    rpm: 95,
    level: "Power Endurance",
    start_date: "2024-05-01",
    end_date: "2024-05-31",
  },
  {
    id: 6,
    phase_number: 6,
    rpm: 100,
    level: "Power",
    start_date: "2024-06-01",
    end_date: "2024-06-30",
  },
];

export default function PhaseContainer() {
  return (
    <>
      <ul className="flex flex-col gap-3">
        {phases.map((phase: PhaseInfo, index: number) => (
          <>
            <Phase key={phase.id} {...phase} />
            {index < phases.length - 1 && <Divider />}
          </>
        ))}
      </ul>
    </>
  );
}
