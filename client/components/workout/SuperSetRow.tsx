import { SuperSet } from "@/types/lifts";

export default function SuperSetRow(superset: SuperSet) {
  return (
    <tr className={`border-t border-dark-gray`}>
      <td className="flex flex-row text-left ps-3">
        <span className="font-bold text-xl col text-red-orange">SS</span>
        <ul className="pt-3 pl-3">
          {superset.superset.map((lift) => (
            <li key={lift.id} className="ml-1 font-semibold text-lg">
              {lift.exercise}
            </li>
          ))}
        </ul>
      </td>
      <td className=" p-1 font-semibold text-lg">
        <ul className="pt-3 ">
          {superset.superset.map((lift) => (
            <li key={lift.id} className="ml-1 font-semibold text-lg">
              {lift.reps}
            </li>
          ))}
        </ul>
      </td>
      <td className=" p-1 font-semibold text-lg">
        <ul className="pt-3 ">
          {superset.superset.map((lift) => (
            <li key={lift.id} className="ml-1 font-semibold text-lg">
              {lift.tempo}
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
