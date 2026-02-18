import { useState } from 'react';

import { Button, Icon } from '../../../shared/ui';

import { useGetMonthWater } from './api/useGetMonthWater';
import { HydrationMonthlyItem } from './HydrationMonthlyItem';
import type { MonthWaterlog } from '../../../pages/account/types/hydration-dashboard.types';

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

  const placeholder = (month: number, year: number) => {
    const date = new Date(year, month, 0).getDate();

    return Array.from({ length: date }, (_, i) => i + 1);
  };

  const daysPlaceholderArray = placeholder(month, year);

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
        {(monthWaterlog || daysPlaceholderArray)?.map(
          (item: MonthWaterlog | number, i: number) => (
            <HydrationMonthlyItem item={item} key={i} />
          ),
        )}
      </ul>
    </div>
  );
}
