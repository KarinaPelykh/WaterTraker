import { axiosInstance } from '../../../shared/Api';

type SignupSchema = {
  email: string;
  password: string;
};

export const signup = async (data: SignupSchema) => {
  const response = await axiosInstance.post('auth/signup', data);
  return response;
};
