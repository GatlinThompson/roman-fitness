export const titleCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const wsSender = (type: string, payload: object): string => {
  return JSON.stringify({ type: type, payload: payload });
};
