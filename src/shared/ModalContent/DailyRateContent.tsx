import { Button } from '../Button';
import { Form, ItemLabel, Label } from '../Form';
import { Icon } from '../Icon';
import { Input } from '../Input';
import * as Dialog from '@radix-ui/react-dialog';
import { ScrollAreaBar } from '../ScrollAreaBar';
import { ModalContainer } from './ModalContainer';

export function DailyRateContent() {
  return (
    <ModalContainer className="tablet-ms:w-[704px] desktop-m:w-[592px] flex">
      <ScrollAreaBar className="flex min-h-0 flex-1">
        <Form>
          <div className="mb-6 flex items-center justify-between">
            <Dialog.Title className="text-4x">My daily norma</Dialog.Title>
            <Dialog.Trigger className="cursor-pointer">
              <Icon iconName="plus" className="stroke-blue size-6 rotate-45" />
            </Dialog.Trigger>
          </div>
          <Dialog.DialogDescription aria-describedby={undefined} />
          <div className="tablet-ms:flex tablet-ms:gap-6 mb-3">
            <p className="tablet-ms:m-0 mb-4">
              For girl:
              <span className="text-blue"> V=(M*0,03) + (T*0,4)</span>
            </p>
            <p>
              For man:
              <span className="text-blue"> V=(M*0,04) + (T*0,6)</span>
            </p>
          </div>
          <div className="border-light-blue text-grey tablet-ms:text-sx mb-6 rounded-s border p-2.5">
            <span className="text-blue"> *</span> V is the volume of the water
            norm in liters per day, M is your body weight, T is the time of
            active sports, or another type of activity commensurate in terms of
            loads (in the absence of these, you must set 0)
          </div>
          <div className="flex flex-col">
            <p className="text-2x mb-4">Calculate your rate:</p>
            <div className="mb-4 flex items-center gap-6">
              <ItemLabel className="m-0! flex items-center gap-2">
                <input type="radio" name="" id="" />
                <Label className="m-0!"> For woman</Label>
              </ItemLabel>
              <ItemLabel className="m-0! flex items-center gap-2">
                <input type="radio" name="" id="" />
                <Label className="m-0!"> For man</Label>
              </ItemLabel>
            </div>
            <ItemLabel>
              <Label className="text-1x">Your weight in kilograms:</Label>
              <Input placeholder="0" />
            </ItemLabel>
            <ItemLabel>
              <Label className="text-1x">
                The time of active participation in sports or other activities
                with a high physical. load in hours:
              </Label>
              <Input placeholder="0" />
            </ItemLabel>
            <div className="tablet-ms:justify-start mb-6 flex items-center justify-between">
              The required amount of water in liters per day:
              <span className="text-blue block"> 1.8L</span>
            </div>
            <ItemLabel>
              <Label>Write down how much water you will drink:</Label>
              <Input placeholder="0" />
            </ItemLabel>
            <Button className="tablet-ms:w-40 tablet-ms:ml-auto w-full">
              Save
            </Button>
          </div>
        </Form>
      </ScrollAreaBar>
    </ModalContainer>
  );
}
