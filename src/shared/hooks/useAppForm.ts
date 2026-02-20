import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { FieldValues, Resolver, UseFormProps } from 'react-hook-form';
import * as z from 'zod';

export const useAppForm = <S extends z.ZodType<FieldValues, FieldValues>>(
  schema: S,
  options: UseFormProps<z.infer<S>>,
) => {
  const resolver = zodResolver(schema) as Resolver<z.infer<S>>;
  return useForm<z.infer<S>>({ resolver, ...options });
};
