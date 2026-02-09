import { Button } from './Button';
import { Input } from './Form';
import { Icon } from './Icon';

export function PasswordInput({ ...props }) {
  return (
    <div className="relative">
      <Input {...props} />
      <Button
        variant="secondary"
        className="absolute top-1/2 right-2.5 -translate-y-1/2 transform"
      >
        <Icon className="stroke-blue tran size-4" iconName="opened-eye" />
      </Button>
    </div>
  );
}
