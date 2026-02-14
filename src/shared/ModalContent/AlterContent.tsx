import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

type AlertContentProps = {
  textBtn: string;
  className?: string;
  text: string;
  onSubmit: () => void;
};

export function AlertContent({
  onSubmit,
  text,
  className,
  textBtn,
}: AlertContentProps) {
  const { handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-2x mb-6">{text}</p>
      <div
        className={clsx(
          'tablet-ms:flex-row tablet-ms:justify-end flex flex-col-reverse gap-6',
          className,
        )}
      >
        <Dialog.Close asChild>
          <Button className="text-blue! bg-blue2 tablet-ms:text-2x! tablet-ms:w-40">
            Cancel
          </Button>
        </Dialog.Close>
        <Button
          className="bg-error-color tablet-ms:text-2x! tablet-ms:w-40"
          type="submit"
        >
          {textBtn}
        </Button>
      </div>
    </form>
  );
}
