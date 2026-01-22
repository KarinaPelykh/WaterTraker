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

type UserDailyRate = {
  gender: string;
  weight: number;
  activeTime: number;
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

export const getHydrationStory = async () => {
  const response = await axiosInstance.get('water');

  return response;
};

export const deleteHydrationLog = async (userID: string) => {
  console.log('delete', userID);

  const response = await axiosInstance.delete(`water/${userID}`);

  return response;
};

export const addDailyRate = async (data: UserDailyRate) => {
  const response = await axiosInstance.patch('user/water-rate', data);

  return response;
};

export const getUserInfo = async () => {
  const response = await axiosInstance.get('user');

  return response;
};
