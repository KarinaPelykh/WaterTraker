import { Root, Trigger } from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';
import { useState } from 'react';

import { useToggle } from '../../../shared/hooks/useToggle';
import { AlertContent } from '../../../shared/ModalContent/AlterContent';
import { DialogContainer } from '../../../shared/ModalContent/DialogContainer';
import { Icon } from '../../../shared/ui';

import { useDeleteHydrationLog } from './api/useDeleteHydrationLog';
import type { UserWaterEntity } from '../../../feature/hydration-form/model/contract';
import { HydrationForm } from '../../../feature/hydration-form/ui/HydrationForm';
import { getTimeOfDay } from '../../../shared/hooks/getTimeOfDay';

type WaterConsumptionItemProps = {
  item: { _id: string } & UserWaterEntity;
};

const DIALOG_TYPES = ['edit', 'delete'];

export function WaterConsumptionItem({ item }: WaterConsumptionItemProps) {
  const { isOpen, setIsOpen } = useToggle();

  const [dialogType, setDialogType] = useState('');

  const { mutate: deleteHydrationLog } = useDeleteHydrationLog({
    userID: item._id,
    setIsOpen,
  });

  const timeOfDay = getTimeOfDay(item.time);

  return (
    <>
      <li className="mt-[13px] mb-3 flex items-center">
        <Icon
          iconName="glass"
          className="stroke-blue tablet-ms:size-9 mr-3 size-[26px]"
        />
        <p className="text-2x text-blue tablet-ms:mr-4 mr-3">
          {item.amount} ml
        </p>
        <p className="text-sx tablet-ms:mr-auto mr-[38px]">
          {`${item.time} ${timeOfDay}`}
        </p>

        <Root open={isOpen} onOpenChange={setIsOpen}>
          {DIALOG_TYPES.map((dialog, i) => (
            <Trigger
              key={i}
              onClick={() => setDialogType(dialog)}
              className={clsx(
                'relative mr-4.5! cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-transparent after:transition-all after:duration-500 after:content-[""] hover:after:w-4',
                dialog === 'delete'
                  ? 'hover:after:bg-error-color'
                  : 'hover:after:bg-middle-blue',
              )}
            >
              <Icon
                iconName={dialog}
                className={clsx(
                  'size-4',
                  dialog === 'delete'
                    ? 'stroke-error-color'
                    : 'stroke-middle-blue',
                )}
              />
            </Trigger>
          ))}
          {dialogType === 'edit' ? (
            <HydrationForm setIsOpen={setIsOpen} dataWaterLog={item} />
          ) : (
            <DialogContainer
              title="Delete entry"
              className="tablet-ms:w-[592px]"
            >
              <AlertContent
                textBtn="Delete"
                text="Are you sure you want to delete the entry?"
                onSubmit={deleteHydrationLog}
              />
            </DialogContainer>
          )}
        </Root>
      </li>
      <Separator.Root
        className="bg-blue2 h-px w-full"
        decorative
        orientation="vertical"
      />
    </>
  );
}
