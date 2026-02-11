import {
  ErrorMessage,
  Form,
  ItemLabel,
  Label,
  Input,
  FormField,
} from '../Form';
import * as Dialog from '@radix-ui/react-dialog';

import { BtnStepper } from '../BtnStepper';
import { Button } from '../Button';

import { Controller, useForm } from 'react-hook-form';
import { useAddWater } from '../../pages/account/api/useAddWater';
import {
  UserWaterEntitySchema,
  type UserWaterEntity,
} from '../../pages/account/model/contract';
import { DialogContainer } from './DialogContainer';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEditWater } from '../../widget/hydration-statistic/todays-statistic/api/useEditWater';
import { ScrollAreaBar } from '../ScrollAreaBar';
import { Icon } from '../Icon';

type HydrationLogEditorProps = {
  setIsOpen: (value: boolean) => void;
  item?: UserWaterEntity & { _id: string };
};

export function HydrationLogEditor({
  setIsOpen,
  item,
}: HydrationLogEditorProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<UserWaterEntity>({
    defaultValues: { time: '', amount: '', stepAmount: '' },
    resolver: zodResolver(UserWaterEntitySchema),
  });

  useEffect(() => {
    if (item) {
      reset({ time: item.time, amount: item.amount });
    }
  }, [item, reset]);

  const { mutate: addWater } = useAddWater({ reset, setIsOpen });

  const { mutate: addEditWater } = useEditWater();

  return (
    <DialogContainer
      title={item ? 'Edit the entered amount of water' : 'Add water'}
      className="desktop-m:w-[592px] tablet-ms:w-[704px]"
    >
      <ScrollAreaBar className="flex min-h-0 flex-1" scrollClassName="hidden">
        <Form
          onSubmit={handleSubmit(({ amount, time, stepAmount }) => {
            const finalAmount = amount || stepAmount;
            console.log(amount || stepAmount, amount, stepAmount);

            return item
              ? addEditWater({
                  userID: item._id,
                  amount: Number(finalAmount),
                  time,
                })
              : addWater({ amount: Number(finalAmount), time });
          })}
        >
          <Dialog.DialogDescription aria-description={undefined} />
          {item && (
            <div className="bg-light-blue tablet-ms:w-[254px] mb-6 flex items-center rounded-s px-6 py-2">
              <Icon iconName="glass" className="fill-blue mr-3 size-9" />
              <p className="text-2x text-blue mr-4">{item?.amount} ml</p>
              <p className="text-sx">{item?.time}</p>
            </div>
          )}

          <h2 className="text-2x mb-4 font-bold">
            {item ? 'Correct entered data:' : 'Choose a value:'}
          </h2>
          <p className="text-2x mb-3">Amount of water:</p>

          <Controller
            name="stepAmount"
            control={control}
            render={({ field }) => <BtnStepper {...field} />}
          />

          <FormField name="time" errorMessage={errors.time?.message}>
            <ItemLabel className="mb-6">
              <Label htmlFor="time">Recording time:</Label>
              <Input
                id="time"
                {...register('time')}
                placeholder="07:00"
                className="border-blue2! tablet-ms:w-full! placeholder:text-blue! w-[120px]!"
              />
              <ErrorMessage>{errors.time?.message}</ErrorMessage>
            </ItemLabel>
          </FormField>
          <FormField name="amount">
            <ItemLabel>
              <Label className="text-2x mb-4 font-bold" htmlFor="amount">
                Enter the value of the water used:
              </Label>
              <Input
                id="amount"
                {...register('amount')}
                type="number"
                placeholder="50"
                className="border-blue2! placeholder:text-blue! tablet-ms:w-full! w-[120px]!"
              />
              <ErrorMessage>{errors.amount?.message}</ErrorMessage>
            </ItemLabel>
          </FormField>
          <div className="tablet-ms:justify-end tablet-ms:gap-6 tablet-ms:flex-row flex flex-col items-center justify-center gap-6">
            <span className="text-blue font-bold">
              {watch('amount') || watch('stepAmount')}
              ml
            </span>
            <Button type="submit" className="tablet-ms:w-40 w-full">
              Save
            </Button>
          </div>
        </Form>
      </ScrollAreaBar>
    </DialogContainer>
  );
}
