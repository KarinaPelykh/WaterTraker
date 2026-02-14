import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signout } from '../../../shared/lib/service';
import { toastNotification } from '../../../shared/lib/toast';
import { removeAuthToken } from '../../../shared/lib/Api';
import { useNavigate } from 'react-router-dom';

export const useSignout = (setIsOpen: (value: boolean) => void) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['logout'],
    mutationFn: signout,
    onSuccess: (data) => {
      removeAuthToken();
      queryClient.clear();

      setIsOpen(false);
      navigate('/');
      toastNotification('success', data.message);
    },
    onError: () => {
      toastNotification('error', 'Something went wrong');
    },
  });
};
