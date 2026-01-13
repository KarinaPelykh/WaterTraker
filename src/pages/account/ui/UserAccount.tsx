import { Button } from '../../../shared/Button';
import { Icon } from '../../../shared/Icon';
import { ProgressBar } from './ProgressBar';
import { WaterConsumptionList } from './WaterConsumptionList';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { WaterGoal } from './WaterGoal';

export function UserAccount() {
  return (
    <section className="pb-10">
      <div className="relative container">
        <WaterGoal />
        <img
          className="tablet-ms:top-0 max-tablet-ms:max-w-[336px] desktop-m:-ml-38 desktop-m:max-w-[916px] desktop-m:max-h-[680px] tablet-ms:max-w-[736px] tablet-ms:max-h-[548px] max-tablet-ms:mx-auto tablet-ms:left-0 tablet-ms:absolute mb-4"
          src="/signup-desk.png"
          alt="Botel of water"
        />
        <ProgressBar />
        <Button className="mb-10! flex w-full items-center justify-center gap-2.5 py-1.5!">
          <Icon iconName="add" className="size-6 stroke-white" />
          Add Water
        </Button>
        <div className="bg-light-blue shadow-base rounded-s px-2 py-6">
          <p className="text-3x">Today</p>
          <ScrollArea.Root className="flex" type="auto">
            <ScrollArea.Viewport className="relative mr-1 max-h-[220px] w-full">
              <WaterConsumptionList />
            </ScrollArea.Viewport>
            <div className="relative w-0.5">
              <ScrollArea.Scrollbar
                className="bg-blue2 absolute top-0 right-0 w-0.5 touch-none rounded-s opacity-100 transition-all"
                orientation="vertical"
              >
                <ScrollArea.Thumb className='before:content-[" "] before:bg-middle-blue relative before:absolute before:top-1/2 before:left-1/2 before:h-20 before:w-1.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-s' />
              </ScrollArea.Scrollbar>
            </div>
          </ScrollArea.Root>

          <Button
            variant="secondary"
            className="text-blue! mb-6 flex items-center justify-center gap-2"
          >
            <Icon iconName="plus" className="stroke-blue size-4" />
            Add Water
          </Button>
        </div>
      </div>
    </section>
  );
}
