import * as ScrollArea from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import type { ReactNode } from 'react';

export function ScrollAreaBar({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <ScrollArea.Root className="flex" type="auto">
      <ScrollArea.Viewport className={clsx('relative w-full pr-2', className)}>
        {children}
      </ScrollArea.Viewport>
      <div className="relative w-0.5">
        <ScrollArea.Scrollbar
          className="bg-blue2 absolute top-0 right-0 w-0.5 touch-none rounded-s opacity-100 transition-all"
          orientation="vertical"
        >
          <ScrollArea.Thumb className='before:content-[" "] before:bg-middle-blue relative before:absolute before:top-1/2 before:left-1/2 before:h-20 before:w-1.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-s' />
        </ScrollArea.Scrollbar>
      </div>
    </ScrollArea.Root>
  );
}
