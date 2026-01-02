"use client";
import { Lift, SuperSet } from "@/types/lifts";
import { isSuperSet } from "@/utils/utils";
import LiftRow from "./LiftRow";
import SuperSetRow from "./SuperSetRow";
import { useRealtimeWorkout } from "@/hooks/useRealtimeWorkout";

type WorkoutProps = {
  initialLifts: (Lift | SuperSet)[];
};

export default function Workout({ initialLifts }: WorkoutProps) {
  const { lifts, workoutId, loading } = useRealtimeWorkout(initialLifts);
  return (
    <table className="w-full table-auto">
      <col className="w-full" />
      <col className="w-[250px]" />
      <col className="w-[250px]" />
      <thead className="bg-primary text-white">
        <tr className="bg-primary py-3">
          <th className="text-3xl text-left ps-3 py-2">Exercise</th>
          <th className="text-3xl text-left py-2">Reps</th>
          <th className="text-3xl text-left py-2 ">Tempo</th>
        </tr>
      </thead>
      <tbody>
        {lifts.map((lift: Lift | SuperSet) => {
          if (isSuperSet(lift)) {
            return <SuperSetRow key={lift.id} {...lift} />;
          } else {
            return <LiftRow key={lift.id} {...lift} />;
          }
        })}
      </tbody>
    </table>
  );
}
