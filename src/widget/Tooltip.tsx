import clsx from 'clsx';
import { useState, type ReactNode } from 'react';
import type { MonthWaterlog } from '../pages/account/types/hydration-dashboar.types';

type TooltipProps = {
  children: ReactNode;
  item: MonthWaterlog;
};

export const Tooltip = ({ children, item }: TooltipProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inset-0 mx-auto w-full max-w-md">
      <div
        className={clsx(
          'shadow-tooltip desktop-m:w-[292px] absolute -top-[188px] left-1/2 z-40 flex w-[280px] -translate-x-1/2 flex-col gap-4 rounded-xs bg-white px-4 py-6 transition-opacity duration-500',
          show ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <p className="text-blue">{item.date}</p>
        <p>
          Daily norma:
          <span className="text-blue text-2x"> {item.dailyNormWater}L</span>
        </p>
        <p>
          Fulfillment of the daily norm:
          <span className="text-blue text-2x"> {item.percent}%</span>
        </p>

        <p>
          How many servings of water:
          <span className="text-blue text-2x"> {item.list.length}</span>
        </p>
      </div>

      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
};
