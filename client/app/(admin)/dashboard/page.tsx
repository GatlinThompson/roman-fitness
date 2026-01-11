import React from "react";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/supabase/utils/getUser";
import TodaysLift from "./_components/todays_lift/TodaysLift";
import Head from "next/head";
import { Metadata } from "next";

import Main from "@/components/layout/Main";
import WorkoutHeader from "@/components/workout/WorkoutHeader";
import WeeklyLifts from "./_components/weekly_lifts/WeeklyLifts";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <>
      <Main>
        <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(300px,_425px)_1fr] grid-rows-[auto_1fr] gap-6">
          <TodaysLift className="col-span-1 lg:row-span-2 order-2 lg:order-1" />
          <WorkoutHeader className="col-start-1 lg:col-start-2  order-1 lg:order-2" />
          <WeeklyLifts className="col-start-1 lg:col-start-2  order-3" />
        </div>
      </Main>
    </>
  );
}
