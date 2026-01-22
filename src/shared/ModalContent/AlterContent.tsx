import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ModalContainer } from './ModalContainer';
import { useDeleteHydrationLog } from '../../pages/account/api/useDeleteHydrationLog';
import { useForm } from 'react-hook-form';

export function AlterContent({ userID }: { userID: string }) {
  const { mutate: deleteHydrationLog } = useDeleteHydrationLog(userID);

  const { handleSubmit } = useForm();

  return (
    <ModalContainer className="tablet-ms:w-[592px]">
      <form onSubmit={handleSubmit(() => deleteHydrationLog())}>
        <div className="mb-6 flex items-center justify-between">
          <Dialog.Title className="text-4x">Delete entry</Dialog.Title>
          <Dialog.DialogDescription aria-describedby={undefined} />
          <Dialog.Close className="cursor-pointer">
            <Icon iconName="plus" className="stroke-blue size-6 rotate-45" />
          </Dialog.Close>
        </div>
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
    </ModalContainer>
  );
}
