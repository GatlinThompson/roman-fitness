"use client";

import React, { useState } from "react";
import styles from "./LiftInput.module.css";

export default function LiftDateInput({
  initialDate,
}: {
  initialDate?: string;
}) {
  // Initialize with UTC date
  const [date, setDate] = useState<Date>(() => {
    if (initialDate) {
      const d = new Date(initialDate);
      return new Date(
        Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
      );
    }

    // Check for localeTime cookie
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("localeTime="));

    if (cookieValue) {
      const cookieDate = decodeURIComponent(cookieValue.split("=")[1]);
      // cookieDate format is MM/DD/YYYY
      const d = new Date(cookieDate);
      return new Date(
        Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
      );
    }

    const now = new Date();
    return new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    );
  });

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const changeDate = (days: number) => {
    const newDate = new Date(date);
    newDate.setUTCDate(newDate.getUTCDate() + days);
    setDate(newDate);
  };

  // Format as YYYY-MM-DD in UTC
  const dateValue = date.toISOString().split("T")[0];

  return (
    <div
      className={`flex items-center gap-4 mx-2 p-4 glass-black ${styles["input-border"]} rounded-lg`}
    >
      <div className="flex-1 text-center">
        <p className="text-lg font-semibold">{formatDate(date)}</p>
        <input
          type="date"
          name="date"
          value={dateValue}
          onChange={(e) => {
            const inputDate = new Date(e.target.value + "T00:00:00Z");
            setDate(inputDate);
          }}
          className="hidden"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}
