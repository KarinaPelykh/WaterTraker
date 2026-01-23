import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDailyRate } from '../../../shared/lib/service';
import type { UseFormReset } from 'react-hook-form';
import type { UserDailyWaterRate } from '../model/contract';

export const useAddDailyRate = ({
  reset,
}: {
  reset: UseFormReset<UserDailyWaterRate>;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addDailyRate,
    mutationKey: ['daily-rate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['daily-rate'] });
      reset();
      close();
    },
  });
};
