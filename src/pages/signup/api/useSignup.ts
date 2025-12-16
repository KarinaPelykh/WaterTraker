import { useMutation } from '@tanstack/react-query';
import { signup } from './service';

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
