import * as RadioGroup from '@radix-ui/react-radio-group';

type RadioBtnProps = {
  value: string;
  id: string;
};

export const RadioBtn = ({ value, id, ...props }: RadioBtnProps) => {
  return (
    <RadioGroup.Item
      id={id}
      value={value}
      className="border-blue size-3.5 rounded-full border bg-white"
      {...props}
    >
      <RadioGroup.Indicator className="after:content[''] after:bg-blue relative flex size-full items-center justify-center after:block after:size-1.5 after:rounded-full" />
    </RadioGroup.Item>
  );
};
