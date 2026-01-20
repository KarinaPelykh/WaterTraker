import { axiosInstance } from './Api';

type SignupSchema = {
  email: string;
  password: string;
};

type UserSignin = {
  email: string;
  password: string;
};
type AmountWater = {
  time: string;
  amount: number;
};

export const signup = async (data: SignupSchema) => {
  const response = await axiosInstance.post('auth/signup', data);

  return response;
};

export const signin = async (data: UserSignin) => {
  const response = await axiosInstance.post('auth/signin', data);

  return response;
};

export const current = async () => {
  const response = await axiosInstance.get('auth/current');

  return response;
};

export const addWater = async (data: AmountWater) => {
  const response = await axiosInstance.post('water', data);

  return response;
};
