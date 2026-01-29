import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addEditWater } from '../../../shared/lib/service';

// type EditWaterProps = {
//   setIsOpen: (value: boolean) => void;
// };
// setIsOpen: EditWaterProps

export const useEditWater = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['edit-log'],
    mutationFn: addEditWater,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['today-story'] });
      //   setIsOpen(false);
    },
  });
};
