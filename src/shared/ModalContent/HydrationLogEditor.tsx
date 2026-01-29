import { ErrorMessage, Form, ItemLabel, Label } from '../Form';
import * as Dialog from '@radix-ui/react-dialog';
import { Icon } from '../Icon';
import { BtnStepper } from '../BtnStepper';
import { Button } from '../Button';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';
import { useAddWater } from '../../pages/account/api/useAddWater';
import {
  UserWaterEntitySchema,
  type UserWaterEntity,
} from '../../pages/account/model/contract';
import { ModalContainer } from './ModalContainer';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEditWater } from '../../pages/account/api/useEditWater';

type HydrationLogEditorProps = {
  setIsOpen: (value: boolean) => void;
  item?: UserWaterEntity & { _id: string };
};

export function HydrationLogEditor({
  setIsOpen,
  item,
}: HydrationLogEditorProps) {
  const [amountWater, setAmountWater] = useState(50);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserWaterEntity>({
    defaultValues: { time: '', amount: '' },
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
    <ModalContainer className="desktop-m:w-[592px] tablet-ms:w-[704px]">
      <Form
        onSubmit={handleSubmit(({ amount, time }) => {
          return item
            ? addEditWater({ userID: item._id, amount: Number(amount), time })
            : addWater({ amount: Number(amount), time });
        })}
      >
        <div className="mb-6 flex items-center justify-between">
          <Dialog.Title className="text-4x">
            {item ? 'Edit the entered amount of water' : 'Add water'}
          </Dialog.Title>
          <Dialog.Close
            onClick={() => reset()}
            className="rotate-45 cursor-pointer"
          >
            <Icon iconName="plus" className="stroke-blue size-6" />
          </Dialog.Close>
        </div>
        <Dialog.DialogDescription aria-description={undefined} />
        <h2 className="text-2x mb-4">Choose a value:</h2>
        <p className="text-2x mb-3">Amount of water:</p>
        <BtnStepper setAmountWater={setAmountWater} amountWater={amountWater} />
        <ItemLabel className="mb-6 block">
          <Label>Recording time:</Label>
          <Input
            id="time"
            {...register('time')}
            placeholder="7:00"
            className="border-blue tablet-ms:w-full placeholder:text-blue block h-11 w-[120px] rounded-xs border px-2.5 py-3 outline-none"
          />
          <ErrorMessage>{errors.time?.message}</ErrorMessage>
        </ItemLabel>
        <ItemLabel>
          <Label className="text-2x mb-4 font-medium">
            Enter the value of the water used:
          </Label>
          <Input
            id="amount"
            {...register('amount')}
            type="number"
            // value={userChoose}
            // onChange={(e) => setUserChoose(e.target.value)}
            placeholder="50"
            className="border-blue tablet-ms:w-full placeholder:text-blue h-11 w-[120px] rounded-xs border px-2.5 py-3 outline-none"
          />
          <ErrorMessage>{errors.amount?.message}</ErrorMessage>
        </ItemLabel>
        <div className="tablet-ms:justify-end tablet-ms:gap-6 tablet-ms:flex-row flex flex-col items-center justify-center gap-6">
          <span className="text-blue font-bold">
            {/* {userChoose ? userChoose : amountWater}ml */}
          </span>
          <Button type="submit" className="tablet-ms:w-40 w-full">
            Save
          </Button>
        </div>
      </Form>
    </ModalContainer>
  );
}
