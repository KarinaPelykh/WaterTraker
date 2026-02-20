import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteHydrationLog } from '../../../../shared/lib/service';

type useDeleteHydrationLogProps = {
  id: string;
  setIsOpen: (value: boolean) => void;
};

export const useDeleteHydrationLog = ({
  id,
  setIsOpen,
}: useDeleteHydrationLogProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['delete', id],
    mutationFn: () => deleteHydrationLog(id),
    onSuccess: () => {
      setIsOpen(false);
      queryClient.invalidateQueries({
        queryKey: ['today-story'],
      });
      queryClient.invalidateQueries({ queryKey: ['months-water'] });
    },
  });
};
