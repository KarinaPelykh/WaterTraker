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
  weight: string;
  activeTime: string;
};
// auth
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
// auth/

export const addWater = async (data: AmountWater) => {
  const response = await axiosInstance.post('water', data);

  return response;
};

export const getTodaysHydrationStory = async () => {
  const response = await axiosInstance.get('water');

  return response.data;
};

export const deleteHydrationLog = async (userID: string) => {
  const response = await axiosInstance.delete(`water/${userID}`);

  return response;
};

export const addDailyRate = async (data: UserDailyRate) => {
  const response = await axiosInstance.patch('user/water-rate', data);

  return response;
};

export const getUserInfo = async () => {
  const response = await axiosInstance.get('user');

  return response.data;
};
export const getMonthHydrationStory = async (userID: string) => {
  const response = await axiosInstance.get(`month/${userID}`);

  return response.data;
};
