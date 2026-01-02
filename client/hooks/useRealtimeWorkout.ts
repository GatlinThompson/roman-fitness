import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { Lift, SuperSet } from "@/types/lifts";
import { getDates } from "@/utils/utils";

type UseRealtimeWorkoutReturn = {
  lifts: (Lift | SuperSet)[];
  workoutId: string | number | undefined;
  loading: boolean;
};

export function useRealtimeWorkout(
  initialLifts: (Lift | SuperSet)[],
  initialWorkoutId?: string | number | undefined
): UseRealtimeWorkoutReturn {
  const [lifts, setLifts] = useState<(Lift | SuperSet)[]>(initialLifts);
  const [workoutId, setWorkoutId] = useState(initialWorkoutId);
  const [loading, setLoading] = useState(false);

  const supabase = useMemo(() => createClient(), []);
  const isFetchingRef = useRef(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize the update function to prevent recreation on every render
  const updateWorkoutData = useCallback(async () => {
    if (isFetchingRef.current) {
      return;
    }

    // Clear any pending debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Debounce the actual fetch to batch rapid changes
    debounceTimerRef.current = setTimeout(async () => {
      isFetchingRef.current = true;
      setLoading(true);

      try {
        console.log("Fetching updated workout data...");

        const { today, tomorrow } = getDates();
        const { data, error } = await supabase
          .from("workouts")
          .select("*, workout_lifts(sequence, lift(*, superset(*)))")
          .lte("workout_date", new Date(tomorrow).toISOString())
          .gte("workout_date", new Date(today).toISOString())
          .order("sequence", {
            foreignTable: "workout_lifts",
            ascending: true,
          });

        if (error) {
          console.error("Error fetching lifts:", error);
          setLoading(false);
          isFetchingRef.current = false;
          return;
        }

        if (data && data.length > 0) {
          const updatedLifts: (SuperSet | Lift)[] =
            data[0].workout_lifts?.map((item: any) => {
              if (item.lift.superset) {
                return {
                  id: item.lift.id,
                  superset: [
                    {
                      id: item.lift.id,
                      exercise: item.lift.exercise,
                      reps: item.lift.reps,
                      tempo: item.lift.tempo,
                    },
                    {
                      id: item.lift.superset.id,
                      exercise: item.lift.superset.exercise,
                      reps: item.lift.superset.reps,
                      tempo: item.lift.superset.tempo,
                    },
                  ],
                };
              } else {
                return {
                  id: item.lift.id,
                  exercise: item.lift.exercise,
                  reps: item.lift.reps,
                  tempo: item.lift.tempo,
                };
              }
            }) || [];

          setWorkoutId(data[0].id);
          setLifts(updatedLifts);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error updating workout data:", error);

        setLoading(false);
      } finally {
        isFetchingRef.current = false;
      }
    }, 300);
  }, [supabase]);

  useEffect(() => {
    const channel = supabase
      .channel("workout-realtime-updates")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "lifts",
        },
        (payload) => {
          updateWorkoutData();
        }
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "workout_lifts",
        },
        (payload) => {
          updateWorkoutData();
        }
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "workouts",
        },
        (payload) => {
          console.log("🔔 Workouts table changed:", payload);
          updateWorkoutData();
        }
      )
      .subscribe();

    // Cleanup on unmount
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      supabase.removeChannel(channel);
    };
  }, [supabase, updateWorkoutData]);

  return { lifts, workoutId, loading };
}
