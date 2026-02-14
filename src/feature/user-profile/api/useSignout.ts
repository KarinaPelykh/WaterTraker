import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signout } from '../../../shared/lib/service';
import { toastNotification } from '../../../shared/lib/toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../providers/AuthProvider';

export const useSignout = (setIsOpen: (value: boolean) => void) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { setToken } = useAuth();

  return useMutation({
    mutationKey: ['logout'],
    mutationFn: signout,
    onSuccess: (data) => {
      setToken('');
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
