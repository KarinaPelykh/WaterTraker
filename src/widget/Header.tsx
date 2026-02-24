import { Root } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSignout } from '../feature/user-profile/api/useSignout';
import { EditProfileForm } from '../feature/user-profile/EditProfileForm';
import { ProfileDropdown } from '../feature/user-profile/ProfileDropdown';
import { useAuth } from '../providers/AuthProvider';
import { useToggle } from '../shared/hooks/useToggle';
import { AlertContent } from '../shared/ModalContent/AlterContent';
import { DialogContainer } from '../shared/ModalContent/DialogContainer';
import { Icon } from '../shared/ui';

export function Header() {
  const [modalType, setModalType] = useState('');

  const { isOpen, setIsOpen } = useToggle();

  const { mutate: signout } = useSignout(setIsOpen);

  const { data } = useAuth();

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <header className="tablet-ms:pt-4 desktop:pt-3 bg-transparent pt-2">
        <div className="container flex items-center justify-between">
          <NavLink to="/main">
            <Icon iconName="logo" className="tablet-ms:h-12 h-12 w-[102px]" />
          </NavLink>

          {data ? (
            <ProfileDropdown setModalType={setModalType} />
          ) : (
            <div className="flex items-center gap-2">
              <NavLink
                to="/signin"
                className="text-blue text-1x tablet-ms:text-2x"
              >
                Sign in
              </NavLink>
              <Icon iconName="user-account" className="size-7 stroke-black" />
            </div>
          )}
        </div>
      </header>
      {modalType === 'alert' ? (
        <DialogContainer title="Log out" className="tablet-ms:w-[592px]">
          <AlertContent
            text="Do you really want to leave?"
            textBtn="Log out"
            className="tablet-ms:justify-start"
            onSubmit={signout}
          />
        </DialogContainer>
      ) : (
        <EditProfileForm setIsOpen={setIsOpen} />
      )}
    </Root>
  );
}
