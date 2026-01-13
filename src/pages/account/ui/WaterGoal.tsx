import { Button } from '../../../shared/Button';

export function WaterGoal() {
  return (
    <div className="border-light-blue shadow-third mt-[30px] h-[76px] w-[164px] rounded-s border bg-white px-5 py-2">
      <p className="text-2x mb-3">My daily norma</p>
      <div className="flex items-center gap-3">
        <span className="text-7x desktop-m:text-3x text-blue font-bold">
          1.5 L
        </span>
        <Button variant="secondary" className="text-blue-marine!">
          Edit
        </Button>
      </div>
    </div>
  );
}
