import clsx from 'clsx';
import { Tooltip } from './Tooltip';
import type { MonthWaterlog } from '../types/hydration-dashboar.types';

type HydrationMonthlyItemProps = {
  item: MonthWaterlog;
};

export function HydrationMonthlyItem({ item }: HydrationMonthlyItemProps) {
  const [number] = item.date.split(',');

  return (
    <Tooltip item={item}>
      <li className="flex flex-col items-center">
        <div
          className={clsx(
            'flex size-[34px] items-center justify-center rounded-full border bg-white',
            item.percent <= 60 ? 'border-error-color' : 'border-transparent',
          )}
        >
          {number}
        </div>
        <span className="text-blue">{item.percent}%</span>
      </li>
    </Tooltip>
  );
}
