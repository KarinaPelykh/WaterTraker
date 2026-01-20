import { useMutation } from '@tanstack/react-query';
import { addWater } from '../../../shared/lib/service';

export const useAddWater = () => {
  return useMutation({ mutationKey: ['water'], mutationFn: addWater });
};
