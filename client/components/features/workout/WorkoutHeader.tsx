import React from "react";
import styles from "./Workout.module.css";
import Logo from "@/public/roman-logo.png";
import Image from "next/image";

type WorkoutHeaderProps = {
  className?: string;
};

/**
 * WorkoutHeader component displays the header information for a workout session.
 * @param {string} className Optional additional CSS classes to apply to the container.
 * @returns The rendered WorkoutHeader component.
 */
export default function WorkoutHeader({ className }: WorkoutHeaderProps) {
  return (
    <section
      className={`flex flex-col md:flex-row gap-4 justify-between ${styles["workout-table-header"]} p-3  md:p-4 rounded-lg ${className}`}
    >
      <div className="flex flex-col ">
        <h1 className="font-bold font-montserrat text-lg lg:text-3xl">
          Phase 1
        </h1>
        <h2 className="font-semibold text-lg lg:text-lg text-light-gray">
          Week&nbsp;3&nbsp;Day&nbsp;6
        </h2>
      </div>
      <div className="grow flex justify-center hidden md:flex lg:hidden xl:flex ps-20">
        <Image
          src={Logo}
          alt="Roman Fitness"
          width={200}
          height={58}
          className="aspect-[187/58] object-contain"
        />
      </div>
      <div className="md:text-right flex flex-col">
        <h1 className="font-bold font-montserrat text-lg lg:text-3xl">
          60% <span className="text-red-orange">1RPM</span>
        </h1>
        <h2 className="font-semibold text-lg lg:text-lg text-light-gray">
          Level 1 - Stablization Endurance
        </h2>
      </div>
    </section>
  );
}
