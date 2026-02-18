import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteHydrationLog } from '../../../../shared/lib/service';

type useDeleteHydrationLogProps = {
  userID: string;
  setIsOpen: (value: boolean) => void;
};

export const useDeleteHydrationLog = ({
  userID,
  setIsOpen,
}: useDeleteHydrationLogProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['delete', userID],
    mutationFn: () => deleteHydrationLog(userID),
    onSuccess: () => {
      setIsOpen(false);
      queryClient.invalidateQueries({
        queryKey: ['today-story'],
      });
      queryClient.invalidateQueries({ queryKey: ['months-water'] });
    },
  });
};
