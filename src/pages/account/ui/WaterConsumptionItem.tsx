import { Root, Trigger } from '@radix-ui/react-dialog';
import { Icon } from '../../../shared/Icon';
import * as Separator from '@radix-ui/react-separator';
import { AlterContent } from '../../../shared/ModalContent/AlterContent';
import { EditAmountOfWater } from '../../../shared/ModalContent/EditAmountOfWater';
import type { UserWaterEntity } from '../model/contract';

type WaterConsumptionItemProps = {
  item: { _id: string } & UserWaterEntity;
};

export function WaterConsumptionItem({ item }: WaterConsumptionItemProps) {
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
        <p className="text-sx tablet-ms:mr-auto mr-[38px]">{item.time}</p>
        <Root>
          <Trigger className="mr-4.5! cursor-pointer">
            <Icon iconName="edit" className="stroke-middle-blue size-4" />
          </Trigger>
          <EditAmountOfWater />
        </Root>
        <Root>
          <Trigger className="cursor-pointer">
            <Icon iconName="delete" className="stroke-error-color size-4" />
          </Trigger>
          <AlterContent userID={item._id} />
        </Root>
      </li>
      <Separator.Root
        className="bg-blue2 mb-1 ml-2 h-px w-full"
        decorative
        orientation="vertical"
      />
    </>
  );
}
