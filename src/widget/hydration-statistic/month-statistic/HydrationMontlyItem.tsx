import clsx from 'clsx';
import { Tooltip } from '../../Tooltip';
import type { MonthWaterlog } from '../../../pages/account/types/hydration-dashboar.types';

type HydrationMonthlyItemProps = {
  item: MonthWaterlog | number;
};

export function HydrationMonthlyItem({ item }: HydrationMonthlyItemProps) {
  const isPlaceholder = typeof item === 'number';

  const [number] = isPlaceholder ? [] : (item?.date.split(',') ?? null);

  const defaultNum = isPlaceholder && item;

  const percent = isPlaceholder ? 0 : item.percent;

  return (
    <Tooltip item={item}>
      <li className="flex flex-col items-center">
        <div
          className={clsx(
            'flex size-[34px] items-center justify-center rounded-full border bg-white',
            percent <= 60 ? 'border-error-color' : 'border-transparent',
          )}
        >
          {number || defaultNum}
        </div>
        <span className="text-blue">{percent}%</span>
      </li>
    </Tooltip>
  );
}
