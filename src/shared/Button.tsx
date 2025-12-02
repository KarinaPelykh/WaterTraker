import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

type Button = HTMLAttributes<HTMLButtonElement>;

type ButtonProps = Button & {
  className?: string;
};

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'bg-blue shadow-secondary text-1x tablet-ms:text-2x rounded-s px-[30px] py-2 text-white',
        className,
      )}
      {...props}
    />
  );
}
