import { toast, type TypeOptions } from 'react-toastify';

export const toastNotification = (type: TypeOptions, text: string) => {
  return toast(text, {
    type,
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
