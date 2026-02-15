import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addWater } from '../../../shared/lib/service';
import type { UseFormReset } from 'react-hook-form';
import type { UserWaterEntity } from '../model/contract';
import { toastNotification } from '../../../shared/lib/toast';

type AddWaterProps = {
  reset: UseFormReset<UserWaterEntity>;
  setIsOpen: (value: boolean) => void;
};

export const useAddWater = ({ reset, setIsOpen }: AddWaterProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['water'],
    mutationFn: addWater,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['today-story'],
      });
      queryClient.invalidateQueries({
        queryKey: ['months-water'],
      });

      reset();
      setIsOpen(false);
      toastNotification('success', 'Water log added');
    },
    onError: () => {
      toastNotification('error', 'Try again');
    },
  });
};
