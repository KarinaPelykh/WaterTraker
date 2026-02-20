import { useEffect } from 'react';
import { Controller } from 'react-hook-form';

import { useAppForm } from '../../../shared/hooks/useAppForm';
import { DialogContainer } from '../../../shared/ModalContent/DialogContainer';
import { BtnStepper, Button, Icon, ScrollAreaBar } from '../../../shared/ui';
import {
  ErrorMessage,
  Form,
  ItemLabel,
  Label,
  Input,
  FormField,
} from '../../../shared/ui/Form';

import { useFormSubmit } from '../api/useFormSubmit';
import { UserWaterEntitySchema, type UserWaterEntity } from '../model/contract';

type HydrationFormProps = {
  setIsOpen: (value: boolean) => void;
  dataWaterLog?: UserWaterEntity & { _id: string };
};

export function HydrationForm({ setIsOpen, dataWaterLog }: HydrationFormProps) {
  const form = useAppForm(UserWaterEntitySchema, {
    defaultValues: { time: '', amount: 50 },
  });

  useEffect(() => {
    if (dataWaterLog) {
      form.reset({ time: dataWaterLog.time, amount: dataWaterLog.amount });
    }
  }, [dataWaterLog, form]);

  const onSubmit = useFormSubmit({
    setIsOpen,
    dataWaterLog,
    reset: form.reset,
  });

  return (
    <DialogContainer
      title={dataWaterLog ? 'Edit the entered amount of water' : 'Add water'}
      className="desktop-m:w-[592px] tablet-ms:w-[704px]"
    >
      <ScrollAreaBar className="flex min-h-0 flex-1" scrollClassName="hidden">
        <Form
          form={form}
          onSubmit={form.handleSubmit((data) => onSubmit(data))}
        >
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
            control={form.control}
            render={({ field }) => (
              <BtnStepper value={field.value ?? 50} onChange={field.onChange} />
            )}
          />

          <FormField name="time">
            <ItemLabel className="mb-6">
              <Label htmlFor="time">Recording time:</Label>
              <Input
                id="time"
                {...form.register('time')}
                placeholder="07:00"
                className="border-blue2! tablet-ms:w-full! placeholder:text-blue! w-[120px]!"
              />
              <ErrorMessage />
            </ItemLabel>
          </FormField>
          <FormField name="amount">
            <ItemLabel>
              <Label className="text-2x mb-4 font-bold" htmlFor="amount">
                Enter the value of the water used:
              </Label>
              <Controller
                name="amount"
                control={form.control}
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
              <ErrorMessage />
            </ItemLabel>
          </FormField>
          <div className="tablet-ms:justify-end tablet-ms:gap-6 tablet-ms:flex-row flex flex-col items-center justify-center gap-6">
            <span className="text-blue font-bold">
              {form.watch('amount') || 0}
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
