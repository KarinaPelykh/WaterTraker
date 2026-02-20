import { Trigger } from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { modals } from './modals.constant';
import { User } from './User';
import { useToggle } from '../../shared/hooks/useToggle';
import { Icon } from '../../shared/ui';

type ProfileDropdownProps = {
  setModalType: (value: string) => void;
};

export function ProfileDropdown({ setModalType }: ProfileDropdownProps) {
  const { isOpen, setIsOpen } = useToggle();

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger className="cursor-pointer" asChild>
        <User isOpen={isOpen} />
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
