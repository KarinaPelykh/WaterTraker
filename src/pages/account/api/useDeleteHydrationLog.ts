import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteHydrationLog } from '../../../shared/lib/service';

export const useDeleteHydrationLog = (userID: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['delete', userID],
    mutationFn: () => deleteHydrationLog(userID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hydration-story'] });
    },
  });
};
