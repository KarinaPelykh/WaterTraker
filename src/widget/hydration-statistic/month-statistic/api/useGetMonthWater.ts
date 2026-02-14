import { useQuery } from '@tanstack/react-query';
import { getMonthHydrationStory } from '../../../../shared/lib/service';

export const useGetMonthWater = (date: string) => {
  return useQuery({
    queryKey: ['months-water', date],
    queryFn: () => getMonthHydrationStory(date),
  });
};
