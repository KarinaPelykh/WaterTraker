import { z } from 'zod';

export const UserWaterEntitySchema = z.object({
  time: z.string(),
  amount: z.number(),
});

export const UserDailyWaterRateSchema = z.object({
  gender: z.string().trim(),
  weight: z.string().trim(),
  activeTime: z.string().trim(),
});

export type UserWaterEntity = z.infer<typeof UserWaterEntitySchema>;
export type UserDailyWaterRate = z.infer<typeof UserDailyWaterRateSchema>;
