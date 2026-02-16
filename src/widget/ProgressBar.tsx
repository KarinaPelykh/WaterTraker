import * as Progress from '@radix-ui/react-progress';
import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';

const progress = [
  { id: 1, text: '0%' },
  { id: 2, text: '50%' },
  { id: 3, text: '100%' },
];

type ProgressBarProps = { percentOfConsumedWater: number };

export function ProgressBar({ percentOfConsumedWater }: ProgressBarProps) {
  const cappedPercent = Math.min(percentOfConsumedWater, 100);

  return (
    <div className="tablet-ms:mb-0 desktop-m:w-2/3 mb-4 w-full">
      <span className="text-2x text-blue mb-2 block">Today</span>
      <div>
        <div className="relative mb-1 max-w-full">
          <Progress.Root
            className="bg-blue2 h-2 overflow-hidden rounded-s"
            value={50}
          >
            <Progress.Indicator
              className="bg-middle-blue size-full transition duration-500"
              style={{
                transform: `translateX(-${100 - cappedPercent}%)`,
              }}
            />
            <div
              className="border-blue absolute top-1/2 size-3.5 -translate-y-1/2 rounded-full border bg-white transition-all duration-500 ease-out"
              style={{
                left: `calc(${cappedPercent}% - 10px)`,
              }}
            />
          </Progress.Root>
        </div>

        <div className="flex justify-between">
          {progress.map(({ text, id }) => (
            <div className="flex flex-col items-center" key={id}>
              <Separator.Root
                className="bg-blue2 mb-1 ml-2 h-2 w-px"
                decorative
                orientation="horizontal"
              />
              <span
                className={clsx('text-sx text-blue', id === 2 && 'text-1x!')}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
