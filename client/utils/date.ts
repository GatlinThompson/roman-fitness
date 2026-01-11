Date.prototype.toFormattedString = function (): string {
  return this.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

Date.prototype.toShortLongString = function (): string {
  return this.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
