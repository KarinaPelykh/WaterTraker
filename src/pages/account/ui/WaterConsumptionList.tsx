import { Button } from '../../../shared/Button';
import { Icon } from '../../../shared/Icon';
import * as Separator from '@radix-ui/react-separator';

export function WaterConsumptionList() {
  return (
    <>
      <li className="mt-[13px] mb-3 flex items-center">
        <Icon iconName="glass" className="stroke-blue mr-3 size-[26px]" />
        <p className="text-2x text-blue mr-3">200ml</p>
        <p className="text-sx mr-[38px]">14:00 PM</p>
        <Button variant="secondary" className="mr-4.5!">
          <Icon iconName="edit" className="stroke-middle-blue size-4" />
        </Button>
        <Button variant="secondary">
          <Icon iconName="delete" className="stroke-error-color size-4" />
        </Button>
      </li>
      <Separator.Root
        className="bg-blue2 mb-1 ml-2 h-px w-full"
        decorative
        orientation="vertical"
      />
    </>
  );
}
