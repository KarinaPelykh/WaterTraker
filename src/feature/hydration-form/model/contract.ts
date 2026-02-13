import { z } from 'zod';

export const UserWaterEntitySchema = z.object({
  time: z.iso.time('Time must be in HH:mm format').trim(),
  amount: z
    .number()
    .transform((v) => (!v ? 50 : Number(v)))
    .optional(),
});

export type UserWaterEntity = z.infer<typeof UserWaterEntitySchema>;
