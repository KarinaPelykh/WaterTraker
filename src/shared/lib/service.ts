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
  const response = await axiosInstance.get(`water/month/${userID}`, {
    params: {
      date: '2026.01',
    },
  });

  return response.data;
};

// const usedWaterByMonth = async (req, res) => {
//   const { id } = req.params;
//   const { date } = req.body;

//   const [year, month] = date.split(".").map(Number);

//   const startDate = new Date(year, month - 1, 1);
//   const endDate = new Date(year, month, 0, 23, 59, 59, 999).getDate();

//   const user = await User.findById(id);
//   if (!user) {
//     throw HttpError(404);
//   }

//   const dailyGoal = Number(user.water) || 1.5;

//   const result = [];

//   // for (let day = 1; day <= dayInMonth; day++) {
//   //   const start = new Date(year, monthIndex, day, 0, 0, 0, 0);
//   //   const end = new Date(year, monthIndex, day, 23, 59, 59, 999);

//   //   const data = await Water.find({
//   //     createdAt: { $gte: start, $lte: end },
//   //   });

//   //   const total = data.reduce((sum, item) => (sum += item.amount), 0);

//   //   const liters = total / 1000;
//   //   const percent = (liters / Number(user.water)) * 100;

//   // result.push({
//   //   dailyNormWater: user.water,
//   //   percent: Math.round(percent),
//   //   list: data,
//   //   date: `${day},${months[monthIndex]}`,
//   // });
//   // }
//   res.json(result);
// };
