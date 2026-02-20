import { useState, type ChangeEvent } from 'react';

import { useAddUserPhoto } from './api/useAddUserPhoto';
import { Icon } from '../../shared/ui';

export const EditUserPhoto = ({ image }: { image: string }) => {
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const { mutate: addUserPhoto } = useAddUserPhoto();

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedPhoto(URL.createObjectURL(file));
      const formData = new FormData();
      formData.append('avatar', file);

      addUserPhoto(formData);
    }
  };

  return (
    <div className="flex items-center">
      <div className="mr-2 h-20 w-20 overflow-hidden rounded-full">
        <img
          src={
            selectedPhoto ||
            image ||
            'https://img.freepik.com/premium-vector/free-vector-user-icon_901408-589.jpg'
          }
          alt="User photo"
          width={80}
          height={80}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="group relative flex cursor-pointer">
        <Icon
          iconName="arrow-up"
          className="stroke-blue mr-2 size-4 transition duration-500 group-hover:stroke-[#FF9D43]"
        />
        <span className="text-blue text-base transition duration-500 group-hover:text-[#FF9D43]">
          Upload photo
        </span>

        <input
          type="file"
          accept="image/png, image/jpeg"
          className="absolute top-0 left-0 w-full opacity-0"
          onChange={handlePhoto}
        />
      </div>
    </div>
  );
};
