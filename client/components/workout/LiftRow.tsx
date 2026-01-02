import { Lift } from "@/types/lifts";

export default function LiftRow(lift: Lift) {
  return (
    <tr className="border-t border-dark-gray">
      <td className="py-2 px-3">
        <h3 className="text-left font-semibold text-lg">{lift.exercise}</h3>
      </td>
      <td className=" p-1 font-semibold text-lg">
        <p>{lift.reps}</p>
      </td>
      <td className=" p-1 font-semibold text-lg">
        <p>{lift.tempo}</p>
      </td>
    </tr>
  );
}
