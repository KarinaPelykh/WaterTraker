import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addWater } from '../../../shared/lib/service';
import type { UseFormReset } from 'react-hook-form';
import type { UserWaterEntity } from '../model/contract';

export const useAddWater = (reset: UseFormReset<UserWaterEntity>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['water'],
    mutationFn: addWater,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hydration-story'] });
      reset();
    },
  });
};
