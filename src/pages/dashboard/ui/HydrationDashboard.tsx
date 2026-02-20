import { Root, Trigger } from '@radix-ui/react-dialog';

import { useToggle } from '../../../shared/hooks/useToggle';
import { signout } from '../../../shared/lib/service';
import { AlertContent } from '../../../shared/ModalContent/AlterContent';
import { DialogContainer } from '../../../shared/ModalContent/DialogContainer';
import { Icon } from '../../../shared/ui';

import { WaterGoal } from '../../../feature/daily-rate/ui/WaterGoal';
import { HydrationForm } from '../../../feature/hydration-form/ui/HydrationForm';
import { HydrationMonthlyStats } from '../../../widget/hydration-statistic/month-statistic/HydrationMonthlyStats';
import { useTodaysHydrationStory } from '../../../widget/hydration-statistic/todays-statistic/api/useTodaysHydrationStory';
import { WaterLogList } from '../../../widget/hydration-statistic/todays-statistic/WaterLogList';
import { ProgressBar } from '../../../widget/ProgressBar';
import { useGetUserInfo } from '../api/useGetUserInfo';

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
            <WaterLogList />
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
