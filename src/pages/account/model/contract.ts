import { z } from 'zod';

export const UserDailyWaterRateSchema = z.object({
  gender: z.string().trim(),
  weight: z.string().trim(),
  activeTime: z.string().trim(),
});

export type UserDailyWaterRate = z.infer<typeof UserDailyWaterRateSchema>;
