import { useQuery } from '@tanstack/react-query';
import { current } from '../lib/service';

export const useIsAuthenticated = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: current,
    // retry: false,
  });
};
