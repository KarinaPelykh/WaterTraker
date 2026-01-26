import { Root, Trigger } from '@radix-ui/react-dialog';
import { Icon } from '../../../shared/Icon';
import { ScrollAreaBar } from '../../../shared/ScrollAreaBar';
import { ProgressBar } from './ProgressBar';
import { WaterConsumptionItem } from './WaterConsumptionItem';
import { WaterGoal } from './WaterGoal';
import { AddWater } from '../../../shared/ModalContent/AddWater';
import { useHydrationStory } from '../api/useHydrationStory';
import { HydrationMonthlyStats } from './HydrationMonthlyStats';
import { useGetUserInfo } from '../api/useGetUserInfo';

export function HydrationDashboard() {
  const { data, isPending } = useHydrationStory();
  const { data: userIfo } = useGetUserInfo();

  const consumed = data?.reduce(
    (sum: number, { amount }: { amount: string }) => sum + Number(amount),
    0,
  );

  const percentOfConsumedWater =
    consumed && userIfo?.water
      ? (consumed / Number(userIfo?.water * 1000)) * 100
      : 0;

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
              <ProgressBar percentOfConsumedWater={percentOfConsumedWater} />

              <Trigger className="text-1x tablet-ms:text-2x bg-blue shadow-secondary tablet-ms:mb-0! desktop-m:w-[178px] desktop-m:text-2x mb-10! flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-s px-[30px] py-1.5! text-white">
                <Icon iconName="add" className="size-6 stroke-white" />
                Add Water
              </Trigger>
            </div>
          </div>
          <div className="bg-light-blue shadow-base tablet-ms:py-8 tablet-ms:px-6 desktop-m:w-1/2 rounded-s px-2 py-6">
            <p className="text-3x">Today</p>
            <ScrollAreaBar className="h-[200px]">
              <ul className="mb-3">
                {isPending ? (
                  <span>Loading...</span>
                ) : (
                  data.map(
                    (item: { _id: string; time: string; amount: number }) => (
                      <WaterConsumptionItem key={item._id} item={item} />
                    ),
                  )
                )}
              </ul>
              <Trigger className="text-blue mb-6 flex cursor-pointer items-center justify-center gap-2 font-medium">
                <Icon iconName="plus" className="stroke-blue size-4" />
                Add Water
              </Trigger>
            </ScrollAreaBar>

            <HydrationMonthlyStats />
          </div>
          <AddWater />
        </Root>
      </div>
    </section>
  );
}
