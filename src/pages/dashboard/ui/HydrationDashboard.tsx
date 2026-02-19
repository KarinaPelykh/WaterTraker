import { Root, Trigger } from '@radix-ui/react-dialog';

import { useToggle } from '../../../shared/hooks/useToggle';
import { signout } from '../../../shared/lib/service';
import { AlertContent } from '../../../shared/ModalContent/AlterContent';
import { DialogContainer } from '../../../shared/ModalContent/DialogContainer';
import { Icon, ScrollAreaBar } from '../../../shared/ui';

import { WaterGoal } from '../../../feature/daily-rate/ui/WaterGoal';
import type { UserWaterEntity } from '../../../feature/hydration-form/model/contract';
import { HydrationForm } from '../../../feature/hydration-form/ui/HydrationForm';
import { HydrationMonthlyStats } from '../../../widget/hydration-statistic/month-statistic/HydrationMonthlyStats';
import { WaterConsumptionItem } from '../../../widget/hydration-statistic/todays-statistic/WaterConsumptionItem';
import { ProgressBar } from '../../../widget/ProgressBar';
import { useGetUserInfo } from '../api/useGetUserInfo';
import { useTodaysHydrationStory } from '../api/useTodaysHydrationStory';

export function HydrationDashboard() {
  const { data } = useTodaysHydrationStory();

  const { isOpen, setIsOpen } = useToggle();

  const { data: userData } = useGetUserInfo();

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

              <Trigger className="text-1x tablet-ms:text-2x bg-blue shadow-secondary tablet-ms:mb-0! desktop-m:w-[178px] desktop-m:text-2x hover:shadow-btn mb-10! flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-s px-[30px] py-1.5! text-white transition duration-500">
                <Icon iconName="add" className="size-6 stroke-white" />
                Add Water
              </Trigger>
            </div>
          </div>
          <div className="bg-light-blue shadow-base tablet-ms:py-8 tablet-ms:px-6 desktop-m:w-1/2 desktop-m:h-[680px] flex flex-col rounded-s px-2 py-6">
            <div className="desktop-m:mb-auto mb-6">
              <p className="text-3x mb-4">Today</p>
              {data?.list.length === 0 ? null : (
                <ScrollAreaBar className="mb-6 max-h-[200px]">
                  <ul>
                    {data?.list.map(
                      (item: { _id: string } & UserWaterEntity) => (
                        <WaterConsumptionItem key={item._id} item={item} />
                      ),
                    )}
                  </ul>
                </ScrollAreaBar>
              )}

              <Trigger className="group flex cursor-pointer items-center justify-center gap-2">
                <Icon
                  iconName="plus"
                  className="stroke-blue size-4 transition-colors duration-500 group-hover:stroke-[#FF9D43]"
                />
                <span className="text-blue font-medium transition-colors duration-500 group-hover:text-[#FF9D43]">
                  Add Water
                </span>
              </Trigger>
            </div>
            <HydrationMonthlyStats />
          </div>

          {!userData?.water ? (
            <DialogContainer
              title="Notification"
              className="tablet-ms:w-[592px]"
            >
              <AlertContent
                text="You must set up water limit!"
                textBtn="Log out"
                className="hidden"
                onSubmit={signout}
              />
            </DialogContainer>
          ) : (
            <HydrationForm setIsOpen={setIsOpen} />
          )}
        </Root>
      </div>
    </section>
  );
}
