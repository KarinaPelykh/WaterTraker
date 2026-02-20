import { Trigger } from '@radix-ui/react-dialog';

import { Icon, ScrollAreaBar } from '../../../shared/ui';

import { useTodaysHydrationStory } from './api/useTodaysHydrationStory';
import { WaterConsumptionItem } from './WaterConsumptionItem';
import type { UserWaterEntity } from '../../../feature/hydration-form/model/contract';

export const WaterLogList = () => {
  const { data } = useTodaysHydrationStory();

  return (
    <div className="desktop-m:mb-auto mb-6">
      <p className="text-3x mb-4">Today</p>
      {data?.list.length === 0 ? null : (
        <ScrollAreaBar className="mb-6 max-h-[200px]">
          <ul>
            {data?.list.map((item: { _id: string } & UserWaterEntity) => (
              <WaterConsumptionItem key={item._id} item={item} />
            ))}
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
  );
};
