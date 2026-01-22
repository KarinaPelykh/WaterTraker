import { useQuery } from '@tanstack/react-query';
import { getHydrationStory } from '../../../shared/lib/service';

export const useHydrationStory = () => {
  return useQuery({
    queryKey: ['hydration-story'],
    queryFn: getHydrationStory,
  });
};
