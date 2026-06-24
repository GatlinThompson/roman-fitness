import Button from "@/components/ui/Button";
import GlassContainer from "@/components/ui/glass_card/GlassContainer";

type DailyLiftProps = {
  day: {
    date: string;
    dayName: string;
    exerciseCount: number;
    hasWorkout: boolean;
    workoutId?: string | number;
    fullDate: string;
  };
  index?: number;
  isDemo?: boolean;
  isAdmin?: boolean;
};

const liftDays = [
  {
    Mon: "Chest",
    Tue: "Leg",
    Wed: "Arms",
    Thu: "Chest",
    Fri: "Leg",
    Sat: "Shoulder",
  },
];

export default function DailyLift({ day, index = 0, isDemo, isAdmin }: DailyLiftProps) {
  const adminLiftLink =
    day.hasWorkout && day.workoutId
      ? `/lift/${day.workoutId}/edit`
      : `/lift?date=${day.fullDate}`;

  const viewLink =
    day.hasWorkout && day.workoutId
      ? `/lift/${day.workoutId}/edit?demo=true`
      : undefined;

  const showButton = isAdmin || isDemo ? (isDemo ? day.hasWorkout : true) : day.hasWorkout;

  return (
    <GlassContainer className={`p-4 flex items-center justify-center `}>
      <div className="text-center">
        <div className="text-3xl font-semibold text-white">{day.dayName}</div>
        <div className="text-xl text-white/60">{day.date}</div>
        <div className="my-3">
          <div className="text-2xl font-bold text-white">
            {day.exerciseCount + " Lifts" || "No Workout Made"}
          </div>
          {showButton && (
            <Button
              bordered
              to={
                isDemo
                  ? viewLink
                  : isAdmin
                  ? adminLiftLink
                  : viewLink
              }
              className="mt-3 px-5 py-2 text-lg"
            >
              {day.hasWorkout
                ? isAdmin && !isDemo
                  ? "Edit Workout"
                  : "View Workout"
                : "Create Workout"}
            </Button>
          )}
        </div>
        <div className="text-lg text-light-gray">
          {liftDays[0][day.dayName as keyof (typeof liftDays)[0]] || "Rest"} Day
        </div>
      </div>
    </GlassContainer>
  );
}
