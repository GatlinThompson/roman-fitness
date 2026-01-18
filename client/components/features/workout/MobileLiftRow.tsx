import { Lift } from "@/types/lifts";

/**
 *
 * @param lift the lift data
 * @param last checks if it's the last item in the list
 * @returns the mobile version of a single lift row
 */
export default function MobileLiftRow({
  lift,
  className,
}: {
  lift: Lift;
  className?: string;
}) {
  return (
    <article className={className}>
      <h3 className="text-left font-semibold font-montserrat text-lg sm:text-xl mb-3">
        {lift.exercise}
      </h3>
      <ul className="flex gap-6 text-base sm:text-lg justify-start items-center mb-3 list-none p-0 m-0">
        <li>
          <span className="text-gray-400 font-montserrat mr-2">Reps:</span>
          <span className="font-semibold font-montserrat">{lift.reps}</span>
        </li>
        <li>
          <span className="text-gray-400 font-montserrat mr-2">Tempo:</span>
          <span className="font-semibold font-montserrat">
            {!lift.tempo ? <span className="text-2xl">-</span> : lift.tempo}
          </span>
        </li>
      </ul>
    </article>
  );
}
