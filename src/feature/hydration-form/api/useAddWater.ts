import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseFormReset } from 'react-hook-form';

import { addWater } from '../../../shared/lib/service';
import { toastNotification } from '../../../shared/lib/toast';

import type { UserWaterEntity } from '../model/contract';


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
