import type { UseFormReset } from 'react-hook-form';
import type { UserSignin } from '../model/contact';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../../shared/lib/service';
import { useAuth } from '../../../providers/AuthProvider';
import { toastNotification } from '../../../shared/lib/toast';

type ErrorMessage = { response: { data: { message: string } } };

export const useSignin = (reset: UseFormReset<UserSignin>) => {
  const navigate = useNavigate();

  const { setToken } = useAuth();

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['signin'],
    mutationFn: signin,
    onSuccess: (data) => {
      reset();
      setToken(data.token);
      navigate('/main');
      queryClient.invalidateQueries({ queryKey: ['me'] });

      toastNotification('success', 'Signin successfully');
    },
    onError({ response: { data } }: ErrorMessage) {
      toastNotification('error', data.message);
    },
  });
};
