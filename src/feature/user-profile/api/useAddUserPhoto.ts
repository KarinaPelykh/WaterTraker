import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addUserPhoto } from '../../../shared/lib/service';
import { toastNotification } from '../../../shared/lib/toast';

export const useAddUserPhoto = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['photo'],
    mutationFn: addUserPhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toastNotification('success', 'User profile updated');
    },
  });
};
