"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Lift, SuperSet } from "@/types/lifts";
import { getTodayWorkout } from "@/lib/supabase/utils/lifts";

const isSuperSet = (lift: Lift | SuperSet): lift is SuperSet => {
  return (lift as SuperSet).superset !== undefined;
};

export default function Workout() {
  const [workout, setWorkout] = useState<Lift[]>([]);

  const getWorkout = async () => {
    const workout = await getTodayWorkout();

    if (workout) {
      setWorkout(workout);
    }
  };

  useEffect(() => {
    //gets todays workout
    getWorkout();

    const supabase = createClient();

    const channel = supabase.channel("workouts:changes");

    channel
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "workouts" },
        (payload) => {
          console.log(payload);
        }
      )
      .subscribe();

    channel
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "workouts" },
        (payload) => {
          console.log(payload);
        }
      )
      .subscribe();

    channel
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "workouts" },
        (payload) => {
          console.log(payload);
        }
      )
      .subscribe();

    channel
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "workouts" },
        (payload) => {
          console.log(payload);
        }
      )
      .subscribe();
  }, []);

  return (
    <>
      <table className="table-fixed w-full border-spacing-2 border border-gray-400">
        <thead>
          <tr className="">
            <th className="p-1 border border-gray-400 text-left">Exercise</th>
            <th className="p-1 border border-gray-400">Reps</th>
            <th className="p-1 border border-gray-400">Tempo</th>
          </tr>
        </thead>
        <tbody>
          {workout.map((lift: Lift | SuperSet) => {
            console.log(workout);
            if (isSuperSet(lift)) {
              return <SuperSetComponent key={lift.id} {...lift} />;
            } else {
              return <LiftComponent key={lift.id} {...lift} />;
            }
          })}
        </tbody>
      </table>
    </>
  );
}

function SuperSetComponent(superset: SuperSet) {
  return (
    <tr>
      <td className="flex flex-row text-left">
        <span className="font-bold">SS</span>
        <ul className="pt-3 pl-3">
          {superset.superset.map((lift) => (
            <li key={lift.id} className="ml-1">
              {lift.excercise}
            </li>
          ))}
        </ul>
      </td>
      <td className="border p-1">
        <ul className="pt-3 pl-3">
          {superset.superset.map((lift) => (
            <li key={lift.id} className="ml-1">
              {lift.reps}
            </li>
          ))}
        </ul>
      </td>
      <td className="border p-1">
        <ul className="pt-3 pl-3">
          {superset.superset.map((lift) => (
            <li key={lift.id} className="ml-1">
              {lift.tempo}
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

function LiftComponent(lift: Lift) {
  console.log(lift);
  return (
    <tr>
      <td className="border p-1">
        <h3 className="text-left">{lift.excercise}</h3>
      </td>
      <td className="border p-1">
        <p>{lift.reps}</p>
      </td>
      <td className="border p-1">
        <p>{lift.tempo}</p>
      </td>
    </tr>
  );
}
