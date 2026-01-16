"use client";

import Button from "@/components/ui/Button";
import { useModal } from "@/contexts/ModalContext";
import PhasContainer from "./PhasContainer";

export default function PhaseChanger() {
  const { openModal } = useModal();

  const handleOpenPhaseChanger = () => {
    openModal("Manage Phases", <PhasContainer />);
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
