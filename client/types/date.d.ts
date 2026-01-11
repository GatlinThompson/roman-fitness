export {};

declare global {
  interface Date {
    /**
     * Formats the date as locale YYYY-MM-DD.
     * @returns the formatted date string
     */
    toFormattedString(): string;
    /**
     * Formats the date as a short weekday, long month, day, and year string.
     * @returns the formatted date string
     */
    toShortLongString(): string;
  }
}
