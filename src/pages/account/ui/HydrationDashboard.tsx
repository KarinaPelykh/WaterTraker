import { Root, Trigger } from '@radix-ui/react-dialog';
import { Icon } from '../../../shared/Icon';
import { ScrollAreaBar } from '../../../shared/ScrollAreaBar';
import { ProgressBar } from './ProgressBar';
import { WaterConsumptionItem } from './WaterConsumptionItem';
import { WaterGoal } from './WaterGoal';
import { useTodaysHydrationStory } from '../api/useTodaysHydrationStory';
import { HydrationMonthlyStats } from './HydrationMonthlyStats';
import { useToggle } from '../../../shared/hooks/useToggle';
import { HydrationLogEditor } from '../../../shared/ModalContent/HydrationLogEditor';
import type { UserWaterEntity } from '../model/contract';

export function HydrationDashboard() {

  const { data } = useTodaysHydrationStory();

  const { isOpen, setIsOpen } = useToggle();

  return (
    <section className="pb-10">
      <div className="desktop-m:flex desktop-m:gap-8 relative container">
        <Root open={isOpen} onOpenChange={setIsOpen}>
          <div className="desktop-m:w-1/2">
            <WaterGoal />
            <img
              className="tablet-ms:mx-auto max-tablet-ms:max-w-[336px] desktop-m:-ml-38 desktop-m:max-w-[916px] desktop-m:max-h-[680px] tablet-ms:max-w-[736px] tablet-ms:max-h-[548px] max-tablet-ms:mx-auto desktop-m:m-0! mb-4"
              src="/signup-desk.png"
              alt="Botel of water"
            />
            <div className="tablet-ms:flex tablet-ms:gap-3 desktop-m:gap-[23px] tablet-ms:items-center tablet-ms:mb-10 desktop-m:mb-0 w-full">
              <ProgressBar percentOfConsumedWater={data?.percent} />

              <Trigger className="text-1x tablet-ms:text-2x bg-blue shadow-secondary tablet-ms:mb-0! desktop-m:w-[178px] desktop-m:text-2x mb-10! flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-s px-[30px] py-1.5! text-white">
                <Icon iconName="add" className="size-6 stroke-white" />
                Add Water
              </Trigger>
            </div>
          </div>
          <div className="bg-light-blue shadow-base tablet-ms:py-8 tablet-ms:px-6 desktop-m:w-1/2 desktop-m:h-[680px] flex flex-col rounded-s px-2 py-6">
            <div className="mb-auto">
              <p className="text-3x mb-4">Today</p>
              <ScrollAreaBar className="max-h-[200px]">
                <ul>
                  {data?.list.map((item: { _id: string } & UserWaterEntity) => (
                    <WaterConsumptionItem key={item._id} item={item} />
                  ))}
                </ul>
              </ScrollAreaBar>
              <Trigger className="text-blue mb-6 flex cursor-pointer items-center justify-center gap-2 font-medium">
                <Icon iconName="plus" className="stroke-blue size-4" />
                Add Water
              </Trigger>
            </div>
            <HydrationMonthlyStats />
          </div>
          <HydrationLogEditor setIsOpen={setIsOpen} />
        </Root>
      </div>
    </section>
  );
}
