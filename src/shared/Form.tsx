import clsx from 'clsx';
import type { ComponentProps } from 'react';

type Form = ComponentProps<'form'>;

type FromProps = Form & {};

export function Form({ ...props }: FromProps) {
  return <form {...props} />;
}

export function Label({ ...props }: ComponentProps<'label'>) {
  return <label className="text-2x mb-2" {...props} />;
}

export function ItemLabel({ className, ...props }: ComponentProps<'div'>) {
  return <div className={clsx(className, 'mb-4')} {...props} />;
}
