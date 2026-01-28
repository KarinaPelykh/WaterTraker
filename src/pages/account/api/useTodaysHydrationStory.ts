import { useQuery } from '@tanstack/react-query';
import { getTodaysHydrationStory } from '../../../shared/lib/service';

export const useTodaysHydrationStory = (usedID: string) => {
  return useQuery({
    queryKey: ['today-story'],
    queryFn: () => getTodaysHydrationStory(usedID),
  });
};
