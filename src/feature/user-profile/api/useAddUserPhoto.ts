import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUserPhoto } from '../../../shared/lib/service';

export const useAddUserPhoto = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['photo'],
    mutationFn: addUserPhoto,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['user'] }),
  });
};
