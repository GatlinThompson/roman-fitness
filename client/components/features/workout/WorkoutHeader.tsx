import styles from "./WorkoutHeader.module.css";
import Logo from "@/public/roman-logo.png";

import { getPhase } from "@/lib/supabase/utils/getPhase";
import { PhaseInfo } from "@/types/phase";
import PhaseChanger from "@/components/features/phase/PhaseChanger";
import WorkoutWeekDay from "./WorkoutWeekDay";
import { percent } from "framer-motion";

type WorkoutHeaderProps = {
  className?: string;
  showChangePhase?: boolean;
};

/**
 * WorkoutHeader component displays the header information for a workout session.
 * @param {string} className Optional additional CSS classes to apply to the container.
 * @returns The rendered WorkoutHeader component.
 */
export default function WorkoutHeader({
  className,
  showChangePhase,
}: WorkoutHeaderProps) {
  //const phase: PhaseInfo | null = await getPhase();

  const phase = {
    phase: {
      phase_number: 2,
      level: "Strength Endurance",
      id: "phase_12345",
      percentage: 75,
    },
    start_date: "2023-10-01",
  };

  return (
    <section className={`${className} flex flex-col`}>
      <div
        className={` relative flex gap-4 justify-between  ${styles["workout-header"]}`}
      >
        <div
          className={`${styles["workout-table-header"]} absolute top-0 left-0 right-0 bottom-0 rounded-lg -z-10`}
        ></div>
        <div className="flex flex-col gap-4">
          <h1 className={`font-bold font-montserrat ${styles["text-bigger"]}`}>
            Phase {phase?.phase.phase_number || 1}
          </h1>
          <h2 className={`font-semibold ${styles["text-big"]} text-light-gray`}>
            <WorkoutWeekDay phaseDate={phase?.start_date || null} />
          </h2>
        </div>
        <div className="grow flex justify-center  absolute left-0 right-0 mx-auto">
          <img
            src={Logo.src}
            alt="Roman Fitness"
            width={187 * 2.25}
            height={58 * 2.25}
            className="aspect-[187/58] object-contain"
          />
        </div>
        <div className="text-right flex flex-col gap-4">
          <h1 className={`font-bold font-montserrat ${styles["text-bigger"]}`}>
            {phase?.phase.percentage || 60}%{" "}
            <span className="text-red-orange">1RPM</span>
          </h1>
          <h2 className={`font-semibold text-light-gray ${styles["text-big"]}`}>
            Level {phase?.phase.phase_number || 1} -{" "}
            {phase?.phase.level || "Stabilization"}
          </h2>
        </div>
      </div>
      {/* Change Phase Button */}
      {showChangePhase && <PhaseChanger />}
    </section>
  );
}
