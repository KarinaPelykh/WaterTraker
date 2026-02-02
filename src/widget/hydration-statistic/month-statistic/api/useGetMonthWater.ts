import { useQuery } from '@tanstack/react-query';
import { getMonthHydrationStory } from '../../../../shared/lib/service';

export const useGetMonthWater = () => {
  return useQuery({
    queryKey: ['months-water'],
    queryFn: getMonthHydrationStory,
  });
};
