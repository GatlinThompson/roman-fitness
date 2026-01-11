"use client";
import { Lift, SuperSet } from "@/types/lifts";
import { isSuperSet } from "@/utils/utils";
import MobileLiftRow from "@/components/workout/MobileLiftRow";
import MobileSuperSetRow from "@/components/workout/MobileSuperSetRow";
import Divider from "@/components/ui/divider/Divider";

type TodaysWorkoutProps = {
  lifts?: (Lift | SuperSet)[];
};

/**
 * todays workout component for mobile view
 *
 * @param lifts the lifts for today's workout
 * @returns the mobile version view of today's workout
 */
export default function TodaysWorkout({ lifts }: TodaysWorkoutProps) {
  if (!lifts || lifts.length === 0) {
    return (
      <p className="text-center text-light-gray p-4 text-2xl">
        No lifts scheduled for today.
      </p>
    );
  }

  return (
    <ul className="list-none p-0 m-0 space-y-4 py-4">
      {lifts.map((liftItem, index) => {
        if (isSuperSet(liftItem)) {
          return (
            <li key={liftItem.id}>
              <MobileSuperSetRow superset={liftItem} className="mx-4" />
              {!(index === lifts.length - 1) && <Divider />}
            </li>
          );
        } else {
          return (
            <li key={liftItem.id}>
              <MobileLiftRow lift={liftItem} className="mx-4" />
              {!(index === lifts.length - 1) && <Divider />}
            </li>
          );
        }
      })}
    </ul>
  );
}
