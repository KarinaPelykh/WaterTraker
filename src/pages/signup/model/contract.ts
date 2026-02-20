import { z } from 'zod';

export const UserSignupSchema = z
  .object({
    email: z.email('Email invalid'),
    password: z
      .string('Password is required')
      .min(6, 'Minimum 6 characters')
      .max(12, 'Maximum 12 characters'),
    confirmPassword: z.string('Please confirm your password'),
  })
  .superRefine((val, cxl) => {
    if (val.password !== val.confirmPassword) {
      cxl.addIssue({
        code: 'custom',
        message: 'Password is not the same as confirm password',
        path: ['confirmPassword'],
      });
    }
    if (!val.email) {
      cxl.addIssue({
        code: 'custom',
        message: 'Email is required',
        path: ['email'],
      });
    }
  });

export type UserSignup = z.infer<typeof UserSignupSchema>;
export type UserSignupApi = Omit<UserSignup, 'confirmPassword'>;
