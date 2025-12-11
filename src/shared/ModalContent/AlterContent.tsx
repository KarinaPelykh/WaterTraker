import { Button } from '../Button';
import { Icon } from '../Icon';

export function AlterContent() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-4x">Delete entry</h2>
        <Button variant="secondary">
          <Icon iconName="plus" className="stroke-blue size-6 rotate-45" />
        </Button>
      </div>

      <p className="text-2x">Are you sure you want to delete the entry?</p>
      <div className="tablet-ms:flex-row tablet-ms:justify-end flex flex-col-reverse gap-6">
        <Button className="text-blue! bg-blue2 tablet-ms:text-2x! tablet-ms:w-40">
          Cancel
        </Button>
        <Button className="bg-error-color tablet-ms:text-2x! tablet-ms:w-40">
          Delete
        </Button>
      </div>
    </>
  );
}
