import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addEditWater } from '../../../shared/lib/service';
import { toastNotification } from '../../../shared/lib/toast';

type UseEditWaterProps = { setIsOpen: (value: boolean) => void };

export const useEditWater = ({ setIsOpen }: UseEditWaterProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['edit-log'],
    mutationFn: addEditWater,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['today-story'] });
      toastNotification('success', 'Edit successfully');
      setIsOpen(false);
    },
    onError: () => {
      toastNotification('error', 'Try again');
    },
  });
};
