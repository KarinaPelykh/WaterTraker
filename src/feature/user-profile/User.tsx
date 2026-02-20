import clsx from 'clsx';

import { useGetUserInfo } from '../../pages/dashboard/api/useGetUserInfo';
import { Icon } from '../../shared/ui';

export function User({ isOpen, ...props }: { isOpen: boolean }) {
  const { data } = useGetUserInfo();

  const userName = data?.name || data?.email.slice(0, data?.email.indexOf('@'));

  return (
    <div {...props} className="flex items-center gap-2">
      <p>{userName}</p>
      <div className="h-7 w-7 overflow-hidden rounded-full">
        <img
          src={
            data?.image ||
            'https://img.freepik.com/premium-vector/free-vector-user-icon_901408-589.jpg'
          }
          alt="User photo"
          width={28}
          height={28}
          className="h-full w-full object-cover"
        />
      </div>

      <Icon
        iconName="arrow-down"
        className={clsx(
          'fill-blue! size-4 rotate-0 transition duration-500',
          isOpen && 'rotate-180 fill-[#FF9D43]!',
        )}
      />
    </div>
  );
}
