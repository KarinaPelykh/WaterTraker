import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Icon } from '../Icon';

export function DialogContainer({
  children,
  className,
  title,
  ...props
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Dialog.Portal {...props}>
      <Dialog.Overlay className="fixed inset-0 z-40 size-full bg-black/80">
        <Dialog.Content
          className={clsx(
            'fixed top-1/2 left-1/2 max-h-[90vh] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-s bg-white px-6 py-8',
            className,
          )}
        >
          <div className="mb-6 flex items-center justify-between">
            <Dialog.Title className="text-4x">{title}</Dialog.Title>
            <Dialog.Close className="rotate-45 cursor-pointer">
              <Icon
                iconName="plus"
                className="stroke-blue size-6 transition duration-500 hover:stroke-[#FF9D43]"
              />
            </Dialog.Close>
          </div>
          <Dialog.DialogDescription aria-describedby={undefined} />
          {children}
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
