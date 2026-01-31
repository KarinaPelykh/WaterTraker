import { Root, Trigger } from '@radix-ui/react-dialog';
import * as HoverCard from '@radix-ui/react-hover-card';
import { Icon } from '../shared/Icon';
import { UserProfile } from '../shared/ModalContent/UserProfile';
import { useGetUserInfo } from '../pages/account/api/useGetUserInfo';
import { useToggle } from '../shared/hooks/useToggle';
import { useAuth } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

export function User() {
  const { data } = useGetUserInfo();

  const name = data?.name
    ? data?.name
    : data?.email.slice(0, data?.email.indexOf('@'));

  const { isOpen, setIsOpen } = useToggle();

  const { setToken } = useAuth();

  const navigation = useNavigate();

  const logout = () => {
    setToken('');
    navigation('/signin');
  };

  return (
    <HoverCard.Root>
      <div className="flex items-center gap-2">
        <p>{name}</p>
        <img
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
          alt="User photo"
          width={28}
          height={28}
          className="size-7! rounded-full"
        />
        <HoverCard.Trigger>
          <div className="cursor-pointer">
            <Icon iconName="arrow-down" className="fill-blue! size-4" />
          </div>
        </HoverCard.Trigger>
      </div>

      <HoverCard.Portal>
        <HoverCard.Content
          asChild
          className="box- shadow-base flex h-[88px] w-[180px] rounded-s bg-white p-4"
        >
          <ul className="flex">
            <Root open={isOpen} onOpenChange={setIsOpen}>
              <Trigger className="text-blue mb-4 flex cursor-pointer gap-1">
                <Icon iconName="setting" className="stroke-blue! size-4" />
                Setting
              </Trigger>
              <UserProfile setIsOpen={setIsOpen} />
            </Root>

            <li>
              <button className="text-blue flex gap-1" onClick={logout}>
                <Icon iconName="logout" className="stroke-blue! size-4" /> Log
                out
              </button>
            </li>
          </ul>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
