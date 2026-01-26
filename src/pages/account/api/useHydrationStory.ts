import { useQuery } from '@tanstack/react-query';
import { getTodaysHydrationStory } from '../../../shared/lib/service';

export const useHydrationStory = () => {
  return useQuery({
    queryKey: ['hydration-story'],
    queryFn: getTodaysHydrationStory,
  });
};
