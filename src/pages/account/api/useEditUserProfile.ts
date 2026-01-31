import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUserProfile } from '../../../shared/lib/service';

export const useEditUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['user-profile'],
    mutationFn: addUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};
