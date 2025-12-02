import clsx from 'clsx';
import icon from '/sprite.svg';

type IconProps = {
  iconName: string;
  className: string;
};

export function Icon({ className, iconName, ...props }: IconProps) {
  return (
    <svg className={clsx(className)} {...props}>
      <use xlinkHref={icon + `#${iconName}`}></use>
    </svg>
  );
}
