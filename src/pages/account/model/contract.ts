import { z } from 'zod';

export const UserWaterEntitySchema = z.object({
  time: z.iso.time('Time must be in HH:mm format').trim(),
  amount: z.string().trim(),
  // stepAmount: z.string().trim(),
});

export const UserDailyWaterRateSchema = z.object({
  gender: z.string().trim(),
  weight: z.string().trim(),
  activeTime: z.string().trim(),
});

export type UserWaterEntity = z.infer<typeof UserWaterEntitySchema>;
export type UserDailyWaterRate = z.infer<typeof UserDailyWaterRateSchema>;
