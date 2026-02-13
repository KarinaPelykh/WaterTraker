import { TailSpin } from 'react-loader-spinner';

export function Loader() {
  return (
    <TailSpin
      visible={true}
      height="20"
      width="20"
      color="#fff"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
