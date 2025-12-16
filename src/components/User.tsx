import { Button } from '../shared/Button';
import { Icon } from '../shared/Icon';

export function User() {
  return (
    <div className="flex gap-2">
      <p>dgsgsg</p>
      <img
        src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
        alt="User photo"
        width={28}
        height={28}
        className="size-7! rounded-full"
      />
      <Button variant="secondary">
        <Icon iconName="arrow-down" className="fill-blue! size-4" />
      </Button>
    </div>
  );
}
