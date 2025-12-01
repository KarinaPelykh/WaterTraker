import icon from "../../public/sprite.svg";
export function Header() {
  return (
    <header className="tablet-ms:mt-4 desktop:mt-3 mt-2">
      <div className="container flex justify-between">
        <a>
          <svg className="tablet-ms:h-12 h-10 w-[102px]">
            <use xlinkHref={icon + `#logo`}></use>
          </svg>
        </a>
        <div className="flex items-center gap-2">
          <button className="text-blue text-1x tablet-ms:text-2x">
            Sign in
          </button>
          <svg className="size-7 fill-transparent stroke-black">
            <use xlinkHref={icon + `#user-account`}></use>
          </svg>
        </div>
      </div>
    </header>
  );
}
