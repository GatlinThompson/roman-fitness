import Main from "@/components/layout/Main";
import Workout from "@/components/features/workout/Workout";
import WorkoutHeader from "@/components/features/workout/WorkoutHeader";
import GlassContainer from "@/components/ui/glass_card/GlassContainer";
import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <GlassContainer>
        <WorkoutHeader className="mb-6" location="/admin" />
        <Workout />
      </GlassContainer>
      <Link
        href="/admin"
        className="fixed bottom-4 right-4 px-4 py-2 text-sm font-semibold font-montserrat text-white hover:text-white bg-red-orange rounded-lg transition-colors"
      >
        Demo Login
      </Link>
    </Main>
  );
}
