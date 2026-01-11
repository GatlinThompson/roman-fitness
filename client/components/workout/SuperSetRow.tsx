import { SuperSet } from "@/types/lifts";
import styles from "./Workout.module.css";
import MobileSuperSetRow from "./MobileSuperSetRow";
import Divider from "../ui/divider/Divider";

/** *
 * @param superset the superset to display
 * @param last whether this is the last row in the list
 * @returns the superset row component for desktop and mobile views
 */

export default function SuperSetRow({
  superset,
  last,
}: {
  superset: SuperSet;
  last: boolean;
}) {
  return (
    <tr className="relative">
      {/* Mobile/Tablet: Single column layout */}
      <td className="block lg:table-cell py-3 px-4 lg:ps-5 lg:py-2">
        <section className="lg:hidden">
          <MobileSuperSetRow superset={superset} />
        </section>
        {/* Desktop: Keep original table layout */}
        <section className="hidden lg:flex flex-row text-left">
          <span className="font-bold text-2xl col text-red-orange font-montserrat">
            SS
          </span>
          <ul className="pt-3 pl-5">
            {superset.superset.map((lift, index) => (
              <li
                key={lift.id}
                className={`ml-1 text-left font-semibold font-montserrat text-2xl mb-1 
                    ${
                      index === superset.superset.length - 1 && "text-red-300"
                    } `}
              >
                {lift.exercise}
              </li>
            ))}
          </ul>
        </section>
      </td>
      <td className="hidden lg:table-cell p-1 font-semibold text-lg">
        <ul className="pt-3 flex flex-col">
          {superset.superset.map((lift, index) => (
            <li
              key={lift.id}
              className={`text-left font-semibold font-montserrat text-2xl mb-1 
                  ${index === superset.superset.length - 1 && "text-red-300"} `}
            >
              {lift.reps}
            </li>
          ))}
        </ul>
      </td>
      <td className="hidden lg:table-cell p-1  font-semibold text-lg">
        <ul className="pt-3 flex flex-col">
          {superset.superset.map((lift, index) => (
            <li
              key={lift.id}
              className={`text-left font-semibold font-montserrat text-2xl 
                  ${
                    index === superset.superset.length - 1 &&
                    "text-red-300 mb-2"
                  } `}
            >
              {!lift.tempo ? <span className="text-4xl">-</span> : lift.tempo}
            </li>
          ))}
        </ul>
      </td>
      {!last && (
        <td className="absolute bottom-[-8px] left-0 w-full flex justify-center pointer-events-none">
          <Divider />
        </td>
      )}
    </tr>
  );
}
