// import { useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

export const BtnStepper = ({ amountWater, setAmountWater }) => {
  // const [amountWater, setAmountWater] = useState(50);

  const handelAmountWater = () => {
    return amountWater > 0 && setAmountWater(amountWater - 50);
  };

  return (
    <div className="mb-6 flex items-center gap-[7px]">
      <Button
        onClick={handelAmountWater}
        className="border-middle-blue flex size-11! items-center justify-center rounded-full! border"
        variant="secondary"
      >
        <Icon iconName="minus" className="stroke-blue size-6" />
      </Button>
      <span className="text-blue text-2x bg-light-blue rounded-m block px-2.5 py-1.5 font-bold">
        {amountWater}ml
      </span>
      <Button
        onClick={() => setAmountWater(amountWater + 50)}
        className="border-middle-blue flex size-11! items-center justify-center rounded-full! border"
        variant="secondary"
      >
        <Icon iconName="plus" className="stroke-blue fill-blue size-6" />
      </Button>
    </div>
  );
};
