import { useQuery } from '@tanstack/react-query';
import { getMonthHydrationStory } from '../../../shared/lib/service';

export const useGetMonthWater = (userID: string) => {
  return useQuery({
    queryKey: ['months-water', userID],
    queryFn: () => getMonthHydrationStory(userID),
  });
};
