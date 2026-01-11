import { Lift } from "@/types/lifts";
import styles from "./Workout.module.css";
import MobileLiftRow from "./MobileLiftRow";
import Divider from "../ui/divider/Divider";

export default function LiftRow({ lift, last }: { lift: Lift; last: boolean }) {
  return (
    <tr className="relative">
      {/* Mobile/Tablet: Single column layout */}
      <td className="block lg:table-cell py-3 px-4 lg:px-5">
        <section className="lg:hidden">
          <MobileLiftRow lift={lift} />
        </section>
        {/* Desktop: Keep original table layout */}
        <h3 className="hidden lg:block text-left font-semibold font-montserrat text-2xl mb-2">
          {lift.exercise}
        </h3>
      </td>
      <td className="hidden lg:table-cell text-left font-semibold font-montserrat text-2xl mb-2">
        {lift.reps}
      </td>
      <td className="hidden lg:table-cell text-left font-semibold font-montserrat text-2xl mb-2">
        {!lift.tempo ? <span className="text-4xl">-</span> : lift.tempo}
      </td>

      {!last && (
        <td className="absolute bottom-[-8px] left-0 w-full flex justify-center pointer-events-none">
          <Divider />
        </td>
      )}
    </tr>
  );
}
