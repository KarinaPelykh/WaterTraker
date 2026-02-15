import { z } from 'zod';

export const UserProfileSchema = z
  .object({
    email: z.email('Email invalid'),
    gender: z.string(),
    name: z.string(),
    currentPassword: z
      .string()
      .transform((val) => (val === '' ? undefined : val))
      .pipe(
        z
          .string('Password is required')
          .min(6, 'Minimum 6 characters')
          .max(12, 'Maximum 12 characters')
          .optional(),
      ),

    newPassword: z
      .string()
      .transform((val) => (val === '' ? undefined : val))
      .pipe(
        z
          .string('Password is required')
          .min(6, 'Minimum 6 characters')
          .max(12, 'Maximum 12 characters')
          .optional(),
      ),

    confirmNewPassword: z
      .string()
      .transform((val) => (val === '' ? undefined : val))
      .pipe(z.string('Please confirm your password').optional()),
  })
  .superRefine((val, cxl) => {
    if (val.newPassword !== val.confirmNewPassword) {
      cxl.addIssue({
        code: 'custom',
        message: 'Password is not the same as confirm password',
        path: ['confirmNewPassword'],
      });
    }
  });

export type UserProfileData = z.infer<typeof UserProfileSchema>;
