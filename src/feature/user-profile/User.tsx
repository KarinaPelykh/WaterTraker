import { Trigger } from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

import { useGetUserInfo } from '../../pages/dashboard/api/useGetUserInfo';
import { useToggle } from '../../shared/hooks/useToggle';
import { Icon } from '../../shared/ui';

const modals = [
  {
    type: 'user-profile',
    iconName: 'setting',
    text: 'Setting',
  },
  {
    type: 'alert',
    iconName: 'logout',
    text: 'Log out',
  },
];

type UserProps = {
  setModalType: (value: string) => void;
};

export function User({ setModalType }: UserProps) {
  const { data } = useGetUserInfo();

  const userName = data?.name || data?.email.slice(0, data?.email.indexOf('@'));

  const { isOpen, setIsOpen } = useToggle();

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger className="cursor-pointer" asChild>
        <div className="flex items-center gap-2">
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
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="shadow-base flex h-[88px] w-[118px] flex-col gap-4 rounded-s bg-white p-4">
          {modals.map(({ iconName, type, text }) => (
            <DropdownMenu.Item className="outline-none" key={type}>
              <Trigger
                onClick={() => setModalType(type)}
                className="group mb-4 flex cursor-pointer gap-1"
              >
                <Icon
                  iconName={iconName}
                  className="stroke-blue size-4 transition duration-500 group-hover:stroke-[#FF9D43]"
                />
                <span className="text-blue text-base transition duration-500 group-hover:text-[#FF9D43]">
                  {text}
                </span>
              </Trigger>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
