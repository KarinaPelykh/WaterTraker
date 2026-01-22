import type { UseFormReset } from 'react-hook-form';
import type { UserSignin } from '../model/contact';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../shared/lib/Api';
import { signin } from '../../../shared/lib/service';

export const useSignin = (reset: UseFormReset<UserSignin>) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signin,
    onSuccess: (data) => {
      reset();
      setAuthToken(data.data.token);
      navigate('/main');
    },
  });
};
