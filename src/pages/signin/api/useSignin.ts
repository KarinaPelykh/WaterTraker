import type { UseFormReset } from 'react-hook-form';
import type { UserSignin } from '../model/contact';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../shared/lib/Api';
import { signin } from '../../../shared/lib/service';
import { useAuth } from '../../../components/AuthProvider';

export const useSignin = (reset: UseFormReset<UserSignin>) => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  return useMutation({
    mutationFn: signin,
    onSuccess: (data) => {
      reset();
      setAuthToken(data.data.token);
      setToken(data.data.token);
      navigate('/main');
    },
  });
};
