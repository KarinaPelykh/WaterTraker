import { Icon } from '../Icon';
import { Button } from '../Button';
import { ModalContainer } from './ModalContainer';
import * as Dialog from '@radix-ui/react-dialog';

export function EditAmountOfWater() {
  return (
    <ModalContainer className="desktop-m:w-[592px] tablet-ms:w-[704px]">
      <form>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-4x">Edit the entered amount of water</h1>
          <Dialog.Close className="rotate-45 cursor-pointer">
            <Icon iconName="plus" className="stroke-blue size-6" />
          </Dialog.Close>
        </div>
        <Dialog.Title className="text-2x mb-4">
          Correct entered data:
        </Dialog.Title>
        <Dialog.Description aria-describedby={undefined} />

        <p className="text-2x mb-3">Amount of water:</p>
        <div className="mb-6 flex items-center gap-[7px]">
          <Button
            className="border-middle-blue flex size-11! items-center justify-center rounded-full! border"
            variant="secondary"
          >
            <Icon iconName="minus" className="stroke-blue size-6" />
          </Button>
          <span className="text-blue text-2x bg-light-blue rounded-m block px-2.5 py-1.5 font-bold">
            {50}ml
          </span>
          <Button
            className="border-middle-blue flex size-11! items-center justify-center rounded-full! border"
            variant="secondary"
          >
            <Icon iconName="plus" className="stroke-blue fill-blue size-6" />
          </Button>
        </div>
        <label className="mb-6 block">
          <p className="mb-3">Recording time:</p>
          <input
            type="time"
            placeholder="7:00"
            className="border-blue tablet-ms:w-full placeholder:text-blue block h-11 w-[120px] rounded-xs border px-2.5 py-3 outline-none"
          />
        </label>

        <label className="mb-6 block">
          <p className="text-2x mb-4 font-medium">
            Enter the value of the water used:
          </p>
          <input
            type="number"
            placeholder="50"
            className="border-blue tablet-ms:w-full placeholder:text-blue h-11 w-[120px] rounded-xs border px-2.5 py-3 outline-none"
          />
        </label>

        <div className="tablet-ms:justify-end tablet-ms:gap-6 tablet-ms:flex-row flex flex-col items-center justify-center gap-6">
          <span className="text-blue font-bold">{50}ml</span>
          <Button type="submit" className="tablet-ms:w-40 w-full">
            Save
          </Button>
        </div>
      </form>
    </ModalContainer>
  );
}
