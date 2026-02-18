import { useState } from 'react';

import { Button } from './Button';
import { Input } from './Form';
import { Icon } from './Icon';

export function PasswordInput({ ...props }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relative">
      <Input {...props} type={isShow ? 'text' : 'password'} />
      <Button
        onClick={() => setIsShow(!isShow)}
        variant="secondary"
        className="absolute top-1/2 right-2.5 -translate-y-1/2 transform"
      >
        <Icon
          className="stroke-blue tran size-4"
          iconName={isShow ? 'opened-eye' : 'closed-eye'}
        />
      </Button>
    </div>
  );
}
