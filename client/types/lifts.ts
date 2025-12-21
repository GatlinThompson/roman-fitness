export type Lift = {
  id: number;
  excercise: string;
  reps: string;
  tempo: string;
};

export type SuperSet = {
  id: number;
  superset: Lift[];
};
