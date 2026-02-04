import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../Button';
import { useDeleteHydrationLog } from '../../widget/hydration-statistic/todays-statistic/api/useDeleteHydrationLog';
import { useForm } from 'react-hook-form';
import { DialogContainer } from './DialogContainer';

export function AlterContent({
  userID,
  setIsOpen,
}: {
  userID: string;
  setIsOpen: (value: boolean) => void;
}) {
  const { mutate: deleteHydrationLog } = useDeleteHydrationLog(userID);

  const { handleSubmit } = useForm();

  return (
    <DialogContainer title="Delete entry" className="tablet-ms:w-[592px]">
      <form
        onSubmit={handleSubmit(() => {
          deleteHydrationLog();
          setIsOpen(false);
        })}
      >

        <p className="text-2x mb-6">
          Are you sure you want to delete the entry?
        </p>
        <div className="tablet-ms:flex-row tablet-ms:justify-end flex flex-col-reverse gap-6">
          <Dialog.Close asChild>
            <Button className="text-blue! bg-blue2 tablet-ms:text-2x! tablet-ms:w-40">
              Cancel
            </Button>
          </Dialog.Close>

          <Button
            className="bg-error-color tablet-ms:text-2x! tablet-ms:w-40"
            type="submit"
          >
            Delete
          </Button>
        </div>
      </form>
    </DialogContainer>
  );
}
