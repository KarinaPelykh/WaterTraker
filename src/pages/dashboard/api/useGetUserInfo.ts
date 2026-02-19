import { useQuery } from '@tanstack/react-query';

import { getUserInfo } from '../../../shared/lib/service';

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
  });
};
