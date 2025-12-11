import clsx from 'clsx';
import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  className?: string;
  variant?: string;
};

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'bg-blue shadow-secondary text-1x tablet-ms:text-2x rounded-s px-[30px] py-2 text-white',
        variant === 'secondary' && 'size-fit bg-transparent p-0! shadow-none!',
        className,
      )}
      {...props}
    />
  );
}
