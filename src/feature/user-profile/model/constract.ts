import { z } from 'zod';

export const UserProfileSchema = z
  .object({
    email: z.email('Email invalid'),
    gender: z.string(),
    name: z.string(),
    currentPassword: z
      .string('Password is required')
      .min(6, 'Minimum 6 characters')
      .max(12, 'Maximum 12 characters'),
    newPassword: z
      .string('Password is required')
      .min(6, 'Minimum 6 characters')
      .max(12, 'Maximum 12 characters'),
    confirmNewPassword: z.string('Please confirm your password'),
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
