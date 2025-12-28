"use client";

import Button from "@/components/ui/Button";
import LiftInput from "./LiftInput";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LiftRow = { id: string };

const makeId = () => crypto.randomUUID();

export default function LiftInputGroup() {
  const [lifts, setLifts] = useState<LiftRow[]>([{ id: makeId() }]);

  const removeLift = (id: string) => {
    setLifts((prev) => prev.filter((l) => l.id !== id));
  };

  const addLift = () => {
    setLifts((prev) => [...prev, { id: makeId() }]);
  };

  const moveLift = (fromIndex: number, toIndex: number) => {
    setLifts((prev) => {
      if (toIndex < 0 || toIndex >= prev.length) return prev;

      const next = [...prev];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  };

  return (
    <div className="">
      <AnimatePresence initial={false}>
        <motion.div layout transition={{ duration: 0.2, ease: "easeInOut" }}>
          {lifts.map((lift, index) => (
            <motion.div
              key={lift.id}
              layout
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-secondary p-4 mx-3 mb-6 rounded-lg shadow-md relative">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-3xl font-semibold">
                    Lift {index !== undefined ? index + 1 : ""}
                  </h2>
                  <div>
                    {lifts.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeLift(lift.id)}
                        className="text-red-600 font-bold hover:text-red-800 text-4xl font-thin"
                      >
                        X
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-4">
                  {index !== 0 && (
                    <Button
                      type="button"
                      onClick={() => moveLift(index, index - 1)}
                      disabled={index === 0}
                    >
                      Up
                    </Button>
                  )}
                  {index !== lifts.length - 1 && (
                    <Button
                      type="button"
                      onClick={() => moveLift(index, index + 1)}
                      disabled={index === lifts.length - 1}
                    >
                      Down
                    </Button>
                  )}
                </div>
                <LiftInput sequence={index + 1} />
              </div>
            </motion.div>
          ))}
          <Button type="button" onClick={addLift} className="m-4">
            Add Another Lift
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
