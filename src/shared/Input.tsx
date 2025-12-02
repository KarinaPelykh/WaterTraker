import clsx from 'clsx';
import type { ComponentProps } from 'react';

type Input = ComponentProps<'input'>;
type InputProps = Input & {};

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        className,
        'text-1x border-middle-blue placeholder:text-middle-blue w-full rounded-xs border px-2.5 py-3 outline-none',
      )}
      {...props}
    />
  );
}
