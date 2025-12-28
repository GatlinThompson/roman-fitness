"use client";

import Button from "@/components/ui/Button";
import LiftInput from "./LiftInput";
import { useState } from "react";
import LiftInputGroup from "./LiftInputGroup";
import LiftDateInput from "./LiftDateInput";

type LiftRow = { id: string };

const makeId = () => crypto.randomUUID();

export default function LiftForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // You will have multiple "lift" fields — use getAll
    const liftJsonStrings = formData.getAll("lift") as string[];
    console.log(liftJsonStrings);

    const res = fetch("/api/lifts", {
      method: "POST",
      body: JSON.stringify({
        date: formData.get("date"),
        lifts: liftJsonStrings,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid gap-6">
        <LiftDateInput />

        <LiftInputGroup />

        <Button type="submit">Save Lift</Button>
      </form>
    </div>
  );
}
