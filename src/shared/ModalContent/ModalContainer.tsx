import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import type { ReactNode } from 'react';

export function ModalContainer({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 size-full bg-black/80">
        <Dialog.Content
          className={clsx(
            'fixed top-1/2 left-1/2 max-h-[90vh] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-s bg-white px-6 py-8',
            className,
          )}
        >
          {children}
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
