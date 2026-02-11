import { Button } from './Button';
import { Icon } from './Icon';

type BtnStepperProps = {
  value: string;
  onChange: (value: number) => void;
};

export const BtnStepper = ({ value, onChange }: BtnStepperProps) => {
  const increment = () => {
    onChange(Number(value) + 50);
  };

  const decrement = () => value > 0 && onChange(Number(value) - 50);

  return (
    <div className="mb-6 flex items-center gap-[7px]">
      <Button
        onClick={decrement}
        className="border-middle-blue shadow-box! flex size-11! items-center justify-center rounded-full! border"
        variant="secondary"
      >
        <Icon iconName="minus" className="fill-blue size-6" />
      </Button>
      <span className="text-blue text-2x bg-blue2 rounded-m block px-2.5 py-1.5 font-bold">
        {value}ml
      </span>
      <Button
        onClick={increment}
        className="border-middle-blue shadow-box! flex size-11! items-center justify-center rounded-full! border"
        variant="secondary"
      >
        <Icon iconName="plus" className="stroke-blue fill-blue size-6" />
      </Button>
    </div>
  );
};
