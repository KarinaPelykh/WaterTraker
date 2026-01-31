// import { Button } from '../../../shared/Button';
// import { Icon } from '../../../shared/Icon';
import { useGetUserInfo } from '../api/useGetUserInfo';
import { useGetMonthWater } from '../api/useGetMonthWater';
import { HydrationMonthlyItem } from './HydrationMontlyItem';
import type { MonthWaterlog } from '../types/hydration-dashboar.types';
// import { RenderCustomMonth } from '../../../shared/DataPicker';

export function HydrationMonthlyStats() {
  const { data } = useGetUserInfo();

  const { data: monthWaterlog } = useGetMonthWater(data?.id);

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

      <ul className="flex flex-wrap justify-between gap-[22px]">
        {monthWaterlog?.map((item: MonthWaterlog, i: number) => (
          <HydrationMonthlyItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}
