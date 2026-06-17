import { Metadata } from "next";
import Main from "@/components/layout/Main";
import WorkoutHeader from "@/components/features/workout/WorkoutHeader";
import TodaysLift from "@/components/features/dashboard/todays_lift/TodaysLift";
import WeeklyLifts from "@/components/features/dashboard/weekly_lifts/WeeklyLifts";

export const metadata: Metadata = {
  title: "Roman Fitness | Demo",
};

export default function Demo() {
  return (
    <Main>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(300px,_425px)_1fr] grid-rows-[auto_1fr] gap-6 grow">
        <TodaysLift className="col-span-1 lg:row-span-2 order-2 lg:order-1" isDemo />
        <WorkoutHeader className="col-start-1 lg:col-start-2 order-1 lg:order-2" isDemo />
        <WeeklyLifts className="col-start-1 lg:col-start-2 order-3" isDemo />
      </div>
    </Main>
  );
}
