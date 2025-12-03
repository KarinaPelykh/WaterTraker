import { Button } from './Button';
import { Icon } from './Icon';
import { Input } from './Input';

export function PasswordInput({ ...props }) {
  return (
    <div className="relative">
      <Input {...props} />
      <Button className="absolute top-1/2 right-2.5 size-fit -translate-y-1/2 transform bg-transparent p-0! shadow-transparent">
        <Icon className="stroke-blue tran size-4" iconName="opened-eye" />
      </Button>
    </div>
  );
}
