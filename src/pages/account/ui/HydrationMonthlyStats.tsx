import { Button } from '../../../shared/Button';
import { Icon } from '../../../shared/Icon';

export function HydrationMonthlyStats() {
  return (
    <div className="flex items-center justify-between">
      <p className="text-3x">Month</p>
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          className="flex items-center justify-center"
        >
          <Icon
            iconName="arrow-down"
            className="stroke-blue size-3.5 rotate-90"
          />
        </Button>
        <span className="text-blue">April, 2023</span>
        <Button
          variant="secondary"
          className="flex items-center justify-center"
        >
          <Icon
            iconName="arrow-down"
            className="stroke-blue size-3.5 -rotate-90"
          />
        </Button>
      </div>
    </div>
  );
}
