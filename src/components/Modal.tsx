import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
};

export function Modal({ children }: ModalProps) {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-[#000000CC]">
      {createPortal(
        <div className="tablet-ms:w-[592px] absolute top-1/2 left-1/2 z-20 flex min-w-[280px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-6 rounded-s bg-white px-6 py-8">
          {children}
        </div>,
        document.body,
      )}
    </div>
  );
}
