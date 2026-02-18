import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseFormReset } from 'react-hook-form';

import { addDailyRate } from '../../../shared/lib/service';
import { toastNotification } from '../../../shared/lib/toast';

import type { UserDailyWaterRate } from '../model/contract';


export const useAddDailyRate = ({
  reset,
  setIsOpen,
}: {
  reset: UseFormReset<UserDailyWaterRate>;
  setIsOpen: (value: boolean) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['daily-goal'],
    mutationFn: addDailyRate,
    onSuccess: () => {
      reset();
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['months-water'] });
      queryClient.invalidateQueries({ queryKey: ['today-story'] });

      toastNotification('success', 'Limit added successfully');
    },
    onError: () => {
      toastNotification('error', 'Try again');
    },
  });
};
