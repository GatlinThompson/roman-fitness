import React from "react";
import styles from "./TodaysLift.module.css";
import GlassContainer from "@/components/ui/glass_card/GlassContainer";
import GlassTitle from "@/components/ui/glass_card/GlassTitle";
import GlassSubTitle from "@/components/ui/glass_card/GlassSubTitle";
import GrayGlassContainer from "@/components/ui/glass_card/GrayGlassContainer";
import { getWorkoutData } from "@/lib/supabase/utils/lifts";
import { Lift, SuperSet } from "@/types/lifts";
import Button from "@/components/ui/Button";
import TodaysWorkout from "./TodaysWorkout";

type TodaysLiftProps = {
  className?: string;
};

/**
 * Today's lift component for the admin dashboard
 *
 * @param className optional additional class names
 * @returns the today's lift component for the admin dashboard
 */
export default async function TodaysLift({ className }: TodaysLiftProps) {
  const date = new Date();

  const {
    lifts = [] as (Lift | SuperSet)[],
    workoutId = undefined as number | undefined,
  } = (await getWorkoutData(date.toFormattedString())) || {
    lifts: [],
    workoutId: undefined,
  };

  return (
    <section className={className}>
      <GlassContainer className={styles.container}>
        <GlassTitle weight="bold" size="4xl" position="center" className="mb-1">
          Today's Lift
        </GlassTitle>

        <GlassSubTitle
          weight="semibold"
          size="2xl"
          position="center"
          className="mb-8"
        >
          {date.toShortLongString()}
        </GlassSubTitle>

        <div className="flex flex-col">
          <Button
            to={`/lift/${workoutId ? workoutId + "/edit" : ""}`}
            className="text-right me-1 mb-1"
            roundedTop={true}
            bordered={true}
          >
            {lifts.length > 0 ? "Edit Workout" : "Create Workout"}
          </Button>
          <GrayGlassContainer>
            <TodaysWorkout lifts={lifts} />
          </GrayGlassContainer>
        </div>
      </GlassContainer>
    </section>
  );
}
