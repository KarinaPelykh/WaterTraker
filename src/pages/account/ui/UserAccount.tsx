import { Root, Trigger } from '@radix-ui/react-dialog';
import { Button } from '../../../shared/Button';
import { Icon } from '../../../shared/Icon';
import { ScrollAreaBar } from '../../../shared/ScrollAreaBar';
import { ProgressBar } from './ProgressBar';
import { WaterConsumptionList } from './WaterConsumptionList';
import { WaterGoal } from './WaterGoal';
import { AddWater } from '../../../shared/ModalContent/AddWater';

export function UserAccount() {
  return (
    <section className="pb-10">
      <div className="desktop-m:flex desktop-m:gap-8 relative container">
        <Root>
          <div className="desktop-m:w-1/2">
            <WaterGoal />
            <img
              className="tablet-ms:mx-auto max-tablet-ms:max-w-[336px] desktop-m:-ml-38 desktop-m:max-w-[916px] desktop-m:max-h-[680px] tablet-ms:max-w-[736px] tablet-ms:max-h-[548px] max-tablet-ms:mx-auto desktop-m:m-0! mb-4"
              src="/signup-desk.png"
              alt="Botel of water"
            />
            <div className="tablet-ms:flex tablet-ms:gap-3 desktop-m:gap-[23px] tablet-ms:items-center tablet-ms:mb-10 desktop-m:mb-0 w-full">
              <ProgressBar />

              <Trigger className="text-1x tablet-ms:text-2x bg-blue shadow-secondary tablet-ms:mb-0! desktop-m:w-[178px] desktop-m:text-2x mb-10! flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-s px-[30px] py-1.5! text-white">
                <Icon iconName="add" className="size-6 stroke-white" />
                Add Water
              </Trigger>
            </div>
          </div>
          <div className="bg-light-blue shadow-base tablet-ms:py-8 tablet-ms:px-6 desktop-m:w-1/2 rounded-s px-2 py-6">
            <p className="text-3x">Today</p>
            <ScrollAreaBar className="max-h-[220px]">
              <ul className="mb-3">
                <WaterConsumptionList />
              </ul>
            </ScrollAreaBar>

            <Trigger className="text-blue mb-6 flex cursor-pointer items-center justify-center gap-2 font-medium">
              <Icon iconName="plus" className="stroke-blue size-4" />
              Add Water
            </Trigger>

            <div className="flex items-center justify-between">
              <p className="text-3x">Month</p>
              <div className="flex items-center gap-3">
                <Button
                  variant="secondary"
                  className="flex items-center justify-center"
                >
                  <Icon
                    iconName="arrow-down"
                    className="stroke-blue size-3.5 rotate-90"
                  />
                </Button>
                <span className="text-blue">April, 2023</span>
                <Button
                  variant="secondary"
                  className="flex items-center justify-center"
                >
                  <Icon
                    iconName="arrow-down"
                    className="stroke-blue size-3.5 -rotate-90"
                  />
                </Button>
              </div>
            </div>
          </div>
          <AddWater />
        </Root>
      </div>
    </section>
  );
}
