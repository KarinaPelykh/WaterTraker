import { Button } from '../../../shared/Button';
import { Icon } from '../../../shared/Icon';
import { useGetMonthWater } from './api/useGetMonthWater';
import { HydrationMonthlyItem } from './HydrationMontlyItem';
import type { MonthWaterlog } from '../../../pages/account/types/hydration-dashboar.types';
import { useState } from 'react';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function HydrationMonthlyStats() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => {
    setSelectedDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1),
    );
  };

  const prevMonth = () => {
    setSelectedDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1),
    );
  };

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1;

  const numberMOnth = month >= 10 ? month : `0${month}`;

  const { data: monthWaterlog } = useGetMonthWater(`${year}.${numberMOnth}`);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-3x">Month</p>
        <div className="flex items-center gap-3">
          <Button
            onClick={prevMonth}
            variant="secondary"
            className="group flex items-center justify-center shadow-none!"
          >
            <Icon
              iconName="arrow-down"
              className="stroke-blue size-3.5 rotate-90 transition-colors duration-500 group-hover:stroke-[#FF9D43]"
            />
          </Button>
          <span className="text-blue">{`${months[selectedDate.getMonth()]}, ${year}`}</span>

          <Button
            onClick={nextMonth}
            variant="secondary"
            className="group flex items-center justify-center shadow-none!"
          >
            <Icon
              iconName="arrow-down"
              className="stroke-blue size-3.5 -rotate-90 transition-colors duration-500 group-hover:stroke-[#FF9D43]"
            />
          </Button>
        </div>
      </div>

      <ul className="desktop-m:gap-[22px] desktop-m:justify-between tablet-ms:gap-6 tablet-ms:grid-cols-10 grid grid-cols-5 gap-[26px]">
        {monthWaterlog?.map((item: MonthWaterlog, i: number) => (
          <HydrationMonthlyItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}
