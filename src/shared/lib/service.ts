import { axiosInstance } from './Api';
import type { UserDailyWaterRate } from '../../feature/daily-rate/model/contract';
import type { UserWaterEntity } from '../../feature/hydration-form/model/contract';
import type { UserProfileData } from '../../feature/user-profile/model/contract';
import type { UserSignin } from '../../pages/signin/model/contact';
import type { UserSignupApi } from '../../pages/signup/model/contract';

const auth = 'auth';

export const signup = async (data: UserSignupApi) => {
  const response = await axiosInstance.post(`${auth}/signup`, data);

  return response;
};

export const signin = async (data: UserSignin) => {
  const response = await axiosInstance.post(`${auth}/signin`, data);

  return response.data;
};

export const current = async () => {
  const response = await axiosInstance.get(`${auth}/current`);

  return response.data;
};

export const signout = async () => {
  const response = await axiosInstance.post(`${auth}/signout`);

  return response.data;
};

export const addWater = async (data: UserWaterEntity) => {
  const response = await axiosInstance.post('water', data);

  return response.data;
};

export const getTodaysHydrationStory = async () => {
  const response = await axiosInstance.get('water/today');

  return response.data;
};

export const deleteHydrationLog = async (id: string) => {
  const response = await axiosInstance.delete(`water/${id}`);

  return response;
};

export const getMonthHydrationStory = async (date: string) => {
  const response = await axiosInstance.get(`water/month`, {
    params: {
      date,
    },
  });

  return response.data;
};

export const addEditWater = async (data: UserWaterEntity & { id: string }) => {
  const { amount, time, id } = data;

  const response = await axiosInstance.put(`water/${id}`, {
    amount,
    time,
  });

  return response.data;
};

export const updateUserDate = async (data: UserProfileData) => {
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

export const addDailyRate = async (data: UserDailyWaterRate) => {
  const response = await axiosInstance.patch('user/water-rate', data);

  return response;
};

export const getUserInfo = async () => {
  const response = await axiosInstance.get('user');

  return response.data;
};
