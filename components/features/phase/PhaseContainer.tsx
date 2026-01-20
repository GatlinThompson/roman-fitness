"use client";
import Phase, { PhaseInfo } from "./Phase";
import Divider from "@/components/ui/divider/Divider";
import { useState, useEffect } from "react";
import { fetchPhases } from "./PhaseChanger";
import Loading from "@/components/ui/loading/Loading";

export default function PhaseContainer({ phases }: { phases: PhaseInfo[] }) {
  const [phaseList, setPhases] = useState<PhaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch latest phases when component mounts
  useEffect(() => {
    const loadPhases = async () => {
      const latestPhases = await fetchPhases();
      setPhases(latestPhases);
      setIsLoading(false);
    };
    loadPhases();
  }, []);

  const updatePhases = async () => {
    const updatedPhases = await fetchPhases();
    setPhases(updatedPhases);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ul className="flex flex-col gap-3">
        {phaseList?.map((phase: PhaseInfo, index: number) => (
          <li key={phase.id}>
            <Phase phase={phase} index={index} onUpdate={updatePhases} />
            {index < phaseList.length - 1 && <Divider />}
          </li>
        ))}
      </ul>
    </>
  );
}
