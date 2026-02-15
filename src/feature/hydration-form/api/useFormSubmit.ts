import type { UseFormReset } from 'react-hook-form';
import { useAddWater } from './useAddWater';
import { useEditWater } from './useEditWater';
import type { UserWaterEntity } from '../model/contract';

type FormValues = {
  amount?: number;
  time: string;
};

type UseFormSubmitProps = {
  dataWaterLog?: UserWaterEntity & { _id: string };
  setIsOpen: (value: boolean) => void;
  reset: UseFormReset<UserWaterEntity>;
};

export const useFormSubmit = ({
  dataWaterLog,
  setIsOpen,
  reset,
}: UseFormSubmitProps) => {
  const { mutate: addEditWater } = useEditWater({ setIsOpen });

  const { mutate: addWater } = useAddWater({ reset, setIsOpen });

  return function onSubmit({ amount, time }: FormValues) {
    console.log(amount, time);

    if (!amount) return;

    if (dataWaterLog) {
      addEditWater({
        userID: dataWaterLog._id,
        amount,
        time,
      });
    } else {
      addWater({ amount, time });
    }
    // return dataWaterLog
    //   ? addEditWater({
    //       userID: dataWaterLog._id,
    //       amount,
    //       time,
    //     })
    //   : addWater({ amount, time });
  };
};
