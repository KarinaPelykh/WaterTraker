import clsx from 'clsx';
import { Tooltip } from '../../Tooltip';
import type { MonthWaterlog } from '../../../pages/account/types/hydration-dashboar.types';

type HydrationMonthlyItemProps = {
  item: MonthWaterlog | number;
};

export function HydrationMonthlyItem({ item }: HydrationMonthlyItemProps) {
  const defaultDay = typeof item === 'number' ? item : null;

  const [number] =
    typeof defaultDay === 'number' ? [] : (item?.date.split(',') ?? null);

  return (
    <Tooltip item={item}>
      <li className="flex flex-col items-center">
        <div
          className={clsx(
            'flex size-[34px] items-center justify-center rounded-full border bg-white',
            (item?.percent || defaultDay) <= 60
              ? 'border-error-color'
              : 'border-transparent',
          )}
        >
          {defaultDay || number}
        </div>
        <span className="text-blue">{item?.percent || 0}%</span>
      </li>
    </Tooltip>
  );
}
