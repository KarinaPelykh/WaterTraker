import { z } from 'zod';

export const UserProfileSchema = z
  .object({
    email: z.email('Email invalid').or(z.literal('')),
    gender: z.string().or(z.literal('')),
    name: z.string().or(z.literal('')),
    currentPassword: z
      .string('Password is required')
      .min(6, 'Minimum 6 characters')
      .max(12, 'Maximum 12 characters')
      .or(z.literal('')),
    newPassword: z
      .string('Password is required')
      .min(6, 'Minimum 6 characters')
      .max(12, 'Maximum 12 characters')
      .or(z.literal('')),
    confirmNewPassword: z
      .string('Please confirm your password')
      .or(z.literal('')),
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
