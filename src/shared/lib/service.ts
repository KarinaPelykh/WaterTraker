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
  amount: number | string;
};

type UserDailyRate = {
  gender: string;
  weight: string;
  activeTime: string;
};

type UserData = {
  email: string;
  name: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  gender: string;
};
// auth
export const signup = async (data: SignupSchema) => {
  const response = await axiosInstance.post('auth/signup', data);

  return response;
};

export const signin = async (data: UserSignin) => {
  const response = await axiosInstance.post('auth/signin', data);

  return response.data;
};

export const current = async () => {
  const response = await axiosInstance.get('auth/current');

  return response.data;
};
// auth/

export const addWater = async (data: AmountWater) => {
  const response = await axiosInstance.post('water', data);

  return response;
};

export const getTodaysHydrationStory = async () => {
  const response = await axiosInstance.get('water/today');

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

export const getMonthHydrationStory = async () => {
  const response = await axiosInstance.get(`water/month`, {
    params: {
      date: '2026.02',
    },
  });

  return response.data;
};

export const addEditWater = async (data: AmountWater & { userID: string }) => {
  const { amount, time } = data;

  const response = await axiosInstance.put(`water/${data.userID}`, {
    amount,
    time,
  });

  return response.data;
};

export const updateUserDate = async (data: UserData) => {
  const { email, name, currentPassword, confirmNewPassword, gender } = data;

  const response = await axiosInstance.patch('user', {
    email,
    name,
    currentPassword,
    newPassword: confirmNewPassword,
    gender,
  });

  return response.data;
};

export const addUserPhoto = async (formData: FormData) => {
  const response = await axiosInstance.post('user/avatar', formData);

  return response.data;
};
