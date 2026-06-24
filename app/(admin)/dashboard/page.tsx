import { redirect } from "next/navigation";
import { getUser } from "@/lib/supabase/utils/getUser";
import { getUserRole } from "@/lib/supabase/utils/getUserRole";
import TodaysLift from "@/components/features/dashboard/todays_lift/TodaysLift";
import { Metadata } from "next";

import Main from "@/components/layout/Main";
import WorkoutHeader from "@/components/features/workout/WorkoutHeader";
import WeeklyLifts from "@/components/features/dashboard/weekly_lifts/WeeklyLifts";

export const metadata: Metadata = {
  title: "Roman Fitness | Dashboard",
};

export default async function Dashboard() {
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  const role = await getUserRole();
  const isAdmin = role === "admin";

  return (
    <>
      <Main>
        <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(300px,_425px)_1fr] grid-rows-[auto_1fr] gap-6  grow">
          <TodaysLift className="col-span-1 lg:row-span-2 order-2 lg:order-1" isAdmin={isAdmin} />
          <WorkoutHeader
            showChangePhase={isAdmin}
            className="col-start-1 lg:col-start-2  order-1 lg:order-2"
          />
          <WeeklyLifts className="col-start-1 lg:col-start-2  order-3" isAdmin={isAdmin} />
        </div>
      </Main>
    </>
  );
}
