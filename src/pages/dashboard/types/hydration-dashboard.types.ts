type Waterlog = {
  dailyGoal: number;
};

export type MonthWaterlog = {
  date: string;
  dailyNormWater: string;
  percent: number;
  list: Waterlog[];
};
