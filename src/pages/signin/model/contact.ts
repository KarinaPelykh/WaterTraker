import { z } from 'zod';

export const UserSigninSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, 'Minimum 6 characters')
    .max(12, 'Maximum 12 characters'),
});

export type UserSignin = z.infer<typeof UserSigninSchema>;
