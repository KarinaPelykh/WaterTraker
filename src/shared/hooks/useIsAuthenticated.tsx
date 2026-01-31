import { useQuery } from '@tanstack/react-query';
import { current } from '../lib/service';

export const useIsAuthenticated = (token: string) => {
  return useQuery({
    queryKey: ['me'],
    queryFn: current,
    enabled: Boolean(token),
  });
};
