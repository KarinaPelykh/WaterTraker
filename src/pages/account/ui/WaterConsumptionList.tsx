import { Root, Trigger } from '@radix-ui/react-dialog';
import { Icon } from '../../../shared/Icon';
import * as Separator from '@radix-ui/react-separator';
import { AlterContent } from '../../../shared/ModalContent/AlterContent';
import { EditAmountOfWater } from '../../../shared/ModalContent/EditAmountOfWater';
import { useState } from 'react';

const modalConfig = {
  edit: <EditAmountOfWater />,
  delete: <AlterContent />,
};

export function WaterConsumptionList() {
  const [modal, setModal] = useState<'edit' | 'delete'>('edit');

  return (
    <Root>
      <li className="mt-[13px] mb-3 flex items-center">
        <Icon
          iconName="glass"
          className="stroke-blue tablet-ms:size-9 mr-3 size-[26px]"
        />
        <p className="text-2x text-blue tablet-ms:mr-4 mr-3">200ml</p>
        <p className="text-sx tablet-ms:mr-auto mr-[38px]">14:00 PM</p>
        <Trigger
          onClick={() => setModal('edit')}
          className="mr-4.5! cursor-pointer"
        >
          <Icon iconName="edit" className="stroke-middle-blue size-4" />
        </Trigger>
        <Trigger onClick={() => setModal('delete')} className="cursor-pointer">
          <Icon iconName="delete" className="stroke-error-color size-4" />
        </Trigger>
      </li>
      <Separator.Root
        className="bg-blue2 mb-1 ml-2 h-px w-full"
        decorative
        orientation="vertical"
      />
      {modalConfig[modal]}
    </Root>
  );
}
