import { Icon } from '../shared/Icon';

export function Header() {
  return (
    <header className="tablet-ms:pt-4 desktop:m+pt-3 tablet-ms:pb-10 desktop-m:pb-20 pt-2 pb-6">
      <div className="container flex justify-between">
        <a>
          <Icon iconName="logo" className="tablet-ms:h-12 h-10 w-[102px]" />
        </a>
        <div className="flex items-center gap-2">
          <button className="text-blue text-1x tablet-ms:text-2x">
            Sign in
          </button>
          <Icon
            iconName="user-account"
            className="size-7 fill-transparent stroke-black"
          />
        </div>
      </div>
    </header>
  );
}
