import Main from "@/components/layout/Main";
import Workout from "@/components/workout/Workout";
import WorkoutHeader from "@/components/workout/WorkoutHeader";
import GlassContainer from "@/components/ui/GlassContainer";
import { getWorkoutData } from "@/lib/supabase/utils/lifts";
import { Lift, SuperSet } from "@/types/lifts";

export default async function Home() {
  const { lifts }: { lifts: (Lift | SuperSet)[] } =
    (await getWorkoutData()) || {
      lifts: [],
    };
  return (
    <Main>
      <GlassContainer className="h-200">
        <WorkoutHeader />
        <Workout initialLifts={lifts} />
      </GlassContainer>
    </Main>
  );
}
