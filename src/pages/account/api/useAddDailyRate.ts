import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDailyRate } from '../../../shared/lib/service';

export const useAddDailyRate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addDailyRate,
    mutationKey: ['daily-rate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['daily-rate'] });
    },
  });
};
