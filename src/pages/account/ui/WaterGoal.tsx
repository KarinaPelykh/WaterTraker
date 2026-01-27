import { Root, Trigger } from '@radix-ui/react-dialog';
import { DailyRateContent } from '../../../shared/ModalContent/DailyRateContent';
import { useGetUserInfo } from '../api/useGetUserInfo';
import { useToggle } from '../../../shared/hooks/useToggle';

export function WaterGoal() {
  const { isOpen, setIsOpen } = useToggle();
  const { data, isPending } = useGetUserInfo();

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <div className="border-light-blue shadow-third tablet-ms:absolute tablet-ms:top-0 tablet-ms:left-8 desktop-m:left-28 mt-[30px] h-[76px] w-[164px] rounded-s border bg-white px-5 py-2">
        <p className="text-2x mb-3">My daily norma</p>
        <div className="flex items-center gap-3">
          <span className="text-7x desktop-m:text-3x text-blue font-bold">
            {isPending ? 1.5 : data.water} L
          </span>
          <Trigger className="text-blue-marine! cursor-pointer">Edit</Trigger>
        </div>
      </div>
      <DailyRateContent setIsOpen={setIsOpen} />
    </Root>
  );
}
