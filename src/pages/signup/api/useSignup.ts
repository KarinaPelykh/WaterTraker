import { useMutation } from '@tanstack/react-query';
import { signup } from '../../../shared/lib/service';
import { useNavigate } from 'react-router-dom';
import type { UseFormReset } from 'react-hook-form';
import type { UserSignup } from '../model/contract';

export const useSignup = (reset: UseFormReset<UserSignup>) => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['signup'],
    mutationFn: signup,
    onSuccess: () => {
      reset();
      navigate('/main');
    },
  });
};
