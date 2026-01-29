import { Root, Trigger } from '@radix-ui/react-dialog';
import { Icon } from '../../../shared/Icon';
import * as Separator from '@radix-ui/react-separator';
import { AlterContent } from '../../../shared/ModalContent/AlterContent';
import type { UserWaterEntity } from '../model/contract';
import { useToggle } from '../../../shared/hooks/useToggle';
import { HydrationLogEditor } from '../../../shared/ModalContent/HydrationLogEditor';

type WaterConsumptionItemProps = {
  item: { _id: string } & UserWaterEntity;
};

export function WaterConsumptionItem({ item }: WaterConsumptionItemProps) {
  const { isOpen, setIsOpen } = useToggle();

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
        <Root open={isOpen} onOpenChange={setIsOpen}>
          <Trigger className="mr-4.5! cursor-pointer">
            <Icon iconName="edit" className="stroke-middle-blue size-4" />
          </Trigger>
          <HydrationLogEditor setIsOpen={setIsOpen} item={item} />
        </Root>
        <Root open={isOpen} onOpenChange={setIsOpen}>
          <Trigger className="cursor-pointer">
            <Icon iconName="delete" className="stroke-error-color size-4" />
          </Trigger>
          <AlterContent setIsOpen={setIsOpen} userID={item._id} />
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
