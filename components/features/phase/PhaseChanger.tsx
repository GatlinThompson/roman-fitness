"use client";

import Button from "@/components/ui/Button";
import { useModal } from "@/contexts/ModalContext";
import PhaseContainer from "./PhaseContainer";
import type { PhaseInfo } from "./Phase";

export const fetchPhases = async () => {
  const response = await fetch("/api/phases");
  const data = await response.json();
  return data.phases;
};

export default function PhaseChanger({ phases }: { phases: PhaseInfo[] }) {
  const { openModal } = useModal();

  const handleOpenPhaseChanger = async () => {
    openModal("Manage Phases", <PhaseContainer phases={phases} />);
  };

  return (
    <div className="-mt-0 flex justify-center max-w-[300px] mx-auto">
      <Button
        onClick={handleOpenPhaseChanger}
        roundedBottom
        borderedBottom={true}
        className=" w-full md:w-48"
      >
        Manage Phases
      </Button>
    </div>
  );
}
