import * as RadioGroup from '@radix-ui/react-radio-group';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { DialogContainer } from './DialogContainer';
import { useAddDailyRate } from '../../feature/daily-rate/api/useAddDailyRate';
import type { UserDailyWaterRate } from '../../feature/daily-rate/model/contract';
import { useGetUserInfo } from '../../pages/dashboard/api/useGetUserInfo';
import { Button } from '../ui/Button';
import { Form, ItemLabel, Label, Input, FormField } from '../ui/Form';
import { RadioBtn } from '../ui/RadioBtn';
import { ScrollAreaBar } from '../ui/ScrollAreaBar';

const Gender = {
  male: 'male',
  female: 'woman',
};

type DailyRateContentProps = {
  setIsOpen: (value: boolean) => void;
};

export function DailyRateContent({ setIsOpen }: DailyRateContentProps) {
  const { handleSubmit, register, control, reset } =
    useForm<UserDailyWaterRate>({
      defaultValues: {
        gender: '',
        weight: '',
        activeTime: '',
      },
    });

  const { mutate: addDailyRate } = useAddDailyRate({ reset, setIsOpen });

  const { data } = useGetUserInfo();

  useEffect(() => {
    if (data) {
      reset({ gender: data.gender });
    }
  }, [data, reset]);

  return (
    <DialogContainer
      title="My daily norma"
      className="tablet-ms:w-[704px] desktop-m:w-[592px] flex"
    >
      <ScrollAreaBar className="flex min-h-0 flex-1" scrollClassName="hidden">
        <Form onSubmit={handleSubmit((data) => addDailyRate(data))}>
          <div className="tablet-ms:flex tablet-ms:gap-6 mb-3">
            <p className="tablet-ms:m-0 mb-4">
              For girl:
              <span className="text-blue"> V=(M*0,03) + (T*0,4)</span>
            </p>
            <p>
              For man:
              <span className="text-blue"> V=(M*0,04) + (T*0,6)</span>
            </p>
          </div>
          <div className="border-light-blue text-grey tablet-ms:text-sx mb-6 rounded-s border p-2.5">
            <span className="text-blue"> *</span> V is the volume of the water
            norm in liters per day, M is your body weight, T is the time of
            active sports, or another type of activity commensurate in terms of
            loads (in the absence of these, you must set 0)
          </div>
          <div className="flex flex-col">
            <p className="text-2x mb-4">Calculate your rate:</p>
            <div className="mb-4 flex items-center gap-6">
              <Controller
                name="gender"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioGroup.Root
                    className="flex items-center gap-1"
                    {...field}
                    onValueChange={field.onChange}
                  >
                    <ItemLabel className="m-0! flex items-center gap-2">
                      <RadioBtn value={Gender.female} id="r1" />
                      <Label className="m-0!" htmlFor="r1">
                        For woman
                      </Label>
                    </ItemLabel>
                    <ItemLabel className="m-0! flex items-center gap-2">
                      <RadioBtn value={Gender.male} id="r2" />
                      <Label className="m-0!" htmlFor="r2">
                        For man
                      </Label>
                    </ItemLabel>
                  </RadioGroup.Root>
                )}
              />
            </div>
            <FormField name="weight">
              <ItemLabel>
                <Label className="text-1x" htmlFor="weight">
                  Your weight in kilograms:
                </Label>
                <Input placeholder="0" id="weight" {...register('weight')} />
              </ItemLabel>
            </FormField>
            <FormField name="activeTime">
              <ItemLabel>
                <Label className="text-1x" htmlFor="activeTime">
                  The time of active participation in sports or other activities
                  with a high physical. load in hours:
                </Label>

                <Input
                  placeholder="0"
                  id="activeTime"
                  {...register('activeTime')}
                />
              </ItemLabel>
            </FormField>

            <div className="tablet-ms:justify-start mb-6 flex items-center justify-between">
              The required amount of water in liters per day:
              <span className="text-blue block"> 1.8L</span>
            </div>

            <Button
              className="tablet-ms:w-40 tablet-ms:ml-auto w-full"
              type="submit"
            >
              Save
            </Button>
          </div>
        </Form>
      </ScrollAreaBar>
    </DialogContainer>
  );
}
