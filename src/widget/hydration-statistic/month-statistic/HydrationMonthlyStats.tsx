// import { Button } from '../../../shared/Button';
// import { Icon } from '../../../shared/Icon';
import { useGetMonthWater } from './api/useGetMonthWater';
import { HydrationMonthlyItem } from './HydrationMontlyItem';
import type { MonthWaterlog } from '../../../pages/account/types/hydration-dashboar.types';
// import { RenderCustomMonth } from '../../../shared/DataPicker';

export function HydrationMonthlyStats() {
  const { data: monthWaterlog } = useGetMonthWater();

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-3x">Month</p>
        <div className="flex items-center gap-3">
          {/* <Button
            variant="secondary"
            className="flex items-center justify-center"
          >
            <Icon
              iconName="arrow-down"
              className="stroke-blue size-3.5 rotate-90"
            />
          </Button> */}
          {/* <RenderCustomMonth /> */}
          {/* <span className="text-blue">April, 2026</span> */}

          {/* <Button
            variant="secondary"
            className="flex items-center justify-center"
          >
            <Icon
              iconName="arrow-down"
              className="stroke-blue size-3.5 -rotate-90"
            />
          </Button> */}
        </div>
      </div>

      <ul className="desktop-m:gap-[22px] desktop-m:justify-between tablet-ms:gap-[34px] flex flex-wrap gap-[25px]">
        {monthWaterlog?.map((item: MonthWaterlog, i: number) => (
          <HydrationMonthlyItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}
