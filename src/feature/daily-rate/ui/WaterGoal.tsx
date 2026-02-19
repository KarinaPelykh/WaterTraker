import { Root, Trigger } from '@radix-ui/react-dialog';

import { useToggle } from '../../../shared/hooks/useToggle';
import { DailyRateContent } from '../../../shared/ModalContent/DailyRateContent';

import { useGetUserInfo } from '../../../pages/dashboard/api/useGetUserInfo';

export function WaterGoal() {
  const { isOpen, setIsOpen } = useToggle();

  const { data } = useGetUserInfo();

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <div className="border-light-blue shadow-third tablet-ms:absolute tablet-ms:top-0 tablet-ms:left-8 desktop-m:left-28 mt-[30px] min-h-[76px] max-w-[164px] rounded-s border bg-white px-5 py-2">
        <p className="text-2x mb-3">My daily norma</p>
        <div className="flex items-center gap-3">
          <span className="text-7x desktop-m:text-3x text-blue font-bold">
            {data?.water || 1.5} L
          </span>
          <Trigger className="text-blue-marine! cursor-pointer transition-colors duration-500 hover:text-[#FF9D43]!">
            Edit
          </Trigger>
        </div>
      </div>
      <DailyRateContent setIsOpen={setIsOpen} />
    </Root>
  );
}
