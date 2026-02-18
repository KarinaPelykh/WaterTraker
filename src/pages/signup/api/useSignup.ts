import { useMutation } from '@tanstack/react-query';
import type { UseFormReset } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { signup } from '../../../shared/lib/service';
import { toastNotification } from '../../../shared/lib/toast';

import type { UserSignup } from '../model/contract';

export const useSignup = (reset: UseFormReset<UserSignup>) => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['signup'],
    mutationFn: signup,
    onSuccess: () => {
      reset();
      navigate('/signin');
      toastNotification('success', 'Signup successfully');
    },
    onError(error) {
      toastNotification('error', error.message);
    },
  });
};
