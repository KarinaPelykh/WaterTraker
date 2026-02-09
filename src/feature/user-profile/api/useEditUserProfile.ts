import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUserProfile } from '../../../shared/lib/service';
import { toastNotification } from '../../../shared/lib/toast';
import type { UseFormReset } from 'react-hook-form';
import type { UserProfileData } from '../model/constract';

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
    mutationKey: ['user-profile'],
    mutationFn: addUserProfile,
    onSuccess: () => {
      setIsOpen(false);
      reset();
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toastNotification('User profile updated!');
    },
  });
};
