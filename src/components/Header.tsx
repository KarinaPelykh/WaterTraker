import { NavLink } from 'react-router-dom';
import { Icon } from '../shared/Icon';
import { useAuth } from '../providers/AuthProvider';
import { User } from './User';

export function Header() {
  const { data } = useAuth();

  return (
    <header className="tablet-ms:pt-4 desktop:pt-3 bg-white pt-2">
      <div className="container flex justify-between">
        <NavLink to="/">
          <Icon iconName="logo" className="tablet-ms:h-12 h-10 w-[102px]" />
        </NavLink>

        {data ? (
          <User />
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
  );
}
