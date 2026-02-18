import {
  ErrorMessage,
  Form,
  ItemLabel,
  Label,
  Input,
  FormField,
} from '../../../shared/ui/Form';

import { Controller, useForm } from 'react-hook-form';

import { DialogContainer } from '../../../shared/ModalContent/DialogContainer';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormSubmit } from '../api/useFormSubmit';
import { UserWaterEntitySchema, type UserWaterEntity } from '../model/contract';
import { BtnStepper, Button, Icon, ScrollAreaBar } from '../../../shared/ui';

type HydrationFormProps = {
  setIsOpen: (value: boolean) => void;
  dataWaterLog?: UserWaterEntity & { _id: string };
};

export function HydrationForm({ setIsOpen, dataWaterLog }: HydrationFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<UserWaterEntity>({
    resolver: zodResolver(UserWaterEntitySchema),
    defaultValues: { time: '', amount: 50 },
  });

  useEffect(() => {
    if (dataWaterLog) {
      reset({ time: dataWaterLog.time, amount: dataWaterLog.amount });
    }
  }, [dataWaterLog, reset]);

  const onSubmit = useFormSubmit({ setIsOpen, dataWaterLog, reset });

  return (
    <DialogContainer
      title={dataWaterLog ? 'Edit the entered amount of water' : 'Add water'}
      className="desktop-m:w-[592px] tablet-ms:w-[704px]"
    >
      <ScrollAreaBar className="flex min-h-0 flex-1" scrollClassName="hidden">
        <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
          {dataWaterLog && (
            <div className="bg-light-blue tablet-ms:w-[254px] mb-6 flex items-center rounded-s px-6 py-2">
              <Icon iconName="glass" className="fill-blue mr-3 size-9" />
              <p className="text-2x text-blue mr-4">
                {dataWaterLog?.amount} ml
              </p>
              <p className="text-sx">{dataWaterLog?.time}</p>
            </div>
          )}

          <h2 className="text-2x mb-4 font-bold">
            {dataWaterLog ? 'Correct entered data:' : 'Choose a value:'}
          </h2>
          <p className="text-2x mb-3">Amount of water:</p>

          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <BtnStepper value={field.value ?? 50} onChange={field.onChange} />
            )}
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
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    placeholder="50"
                    value={field.value ?? ''}
                    className="border-blue2! placeholder:text-blue! tablet-ms:w-full! w-[120px]!"
                    onChange={(e) => {
                      const val = e.target.value;
                      field.onChange(val === '' ? '' : Number(val));
                    }}
                  />
                )}
              />
              <ErrorMessage>{errors.amount?.message}</ErrorMessage>
            </ItemLabel>
          </FormField>
          <div className="tablet-ms:justify-end tablet-ms:gap-6 tablet-ms:flex-row flex flex-col items-center justify-center gap-6">
            <span className="text-blue font-bold">
              {watch('amount') || 0}
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
