export {};

declare global {
  interface Date {
    toFormattedString(): string;
    toShortLongString(): string;
  }
}
