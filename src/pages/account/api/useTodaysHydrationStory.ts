import { useQuery } from '@tanstack/react-query';
import { getTodaysHydrationStory } from '../../../shared/lib/service';

export const useTodaysHydrationStory = () => {
  return useQuery({
    queryKey: ['today-story'],
    queryFn: getTodaysHydrationStory,
  });
};
