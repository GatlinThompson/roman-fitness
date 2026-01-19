/**
 * Formats the date as locale YYYY-MM-DD.
 * @returns the formatted date string
 */
Date.prototype.toFormattedString = function (): string {
  return this.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

/**
 * Formats the date as a short weekday, long month, day, and year string.
 * @returns the formatted date string
 */
Date.prototype.toShortLongString = function (): string {
  return this.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
