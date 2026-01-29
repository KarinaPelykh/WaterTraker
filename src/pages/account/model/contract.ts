import { z } from 'zod';

export const UserWaterEntitySchema = z.object({
  time: z.iso.time(),
  amount: z.string(),
});

export const UserDailyWaterRateSchema = z.object({
  gender: z.string().trim(),
  weight: z.string().trim(),
  activeTime: z.string().trim(),
});

export type UserWaterEntity = z.infer<typeof UserWaterEntitySchema>;
export type UserDailyWaterRate = z.infer<typeof UserDailyWaterRateSchema>;
