import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseFormReset } from 'react-hook-form';

import { updateUserDate } from '../../../shared/lib/service';
import { toastNotification } from '../../../shared/lib/toast';

import type { UserProfileData } from '../model/contract';

type useEditUserProfileProps = {
  setIsOpen: (value: boolean) => void;
  reset: UseFormReset<UserProfileData>;
};

export const useEditUserProfile = ({
  setIsOpen,
  reset,
}: useEditUserProfileProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['update-profile'],
    mutationFn: updateUserDate,
    onSuccess: () => {
      setIsOpen(false);
      reset();
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toastNotification('success', 'User profile updated!');
    },
    onError: () => {
      toastNotification('error', 'User profile wasn`t updated!');
    },
  });
};
