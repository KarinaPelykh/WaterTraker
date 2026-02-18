import {
  ErrorMessage,
  Form,
  FormField,
  ItemLabel,
  Label,
  Input,
} from '../../shared/ui/Form';
import {
  Icon,
  PasswordInput,
  Button,
  ScrollAreaBar,
  RadioBtn,
} from '../../shared/ui';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState, type ChangeEvent } from 'react';
import { useEditUserProfile } from './api/useEditUserProfile';
import { useGetUserInfo } from '../../pages/account/api/useGetUserInfo';

import * as RadioGroup from '@radix-ui/react-radio-group';
import { DialogContainer } from '../../shared/ModalContent/DialogContainer';
import { useAddUserPhoto } from './api/useAddUserPhoto';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfileSchema, type UserProfileData } from './model/constract';

type UserProfileProps = {
  setIsOpen: (value: boolean) => void;
};

const Gender = {
  male: 'male',
  female: 'woman',
};

export const UserProfile = ({ setIsOpen }: UserProfileProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserProfileData>({
    defaultValues: {
      email: '',
      name: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      gender: '',
    },
    resolver: zodResolver(UserProfileSchema),
  });

  const { mutate: updateUserDate } = useEditUserProfile({
    setIsOpen,
    reset,
  });

  const { data } = useGetUserInfo();

  const { mutate: addUserPhoto } = useAddUserPhoto();

  useEffect(() => {
    const name = data?.name ?? '';
    if (data) {
      reset({ name, email: data.email, gender: data.gender });
    }
  }, [data, reset]);

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
    <DialogContainer
      title="Setting"
      className="tablet-ms:w-[704px] desktop-m:w-[1008px]"
    >
      <ScrollAreaBar className="flex min-h-0 flex-1" scrollClassName="hidden">
        <Form
          className="flex flex-col"
          onSubmit={handleSubmit((data) => updateUserDate(data))}
        >
          <div className="desktop-m:flex desktop-m:w-full desktop-m:items-end desktop-m:gap-10 tablet-ms:w-[392px] mb-6">
            <div className="desktop-m:w-[392px]">
              <ItemLabel className="mb-6!">
                <Label>Your photo</Label>

                <div className="flex items-center">
                  <div className="mr-2 h-20 w-20 overflow-hidden rounded-full">
                    <img
                      src={
                        selectedPhoto ||
                        data?.image ||
                        'https://img.freepik.com/premium-vector/free-vector-user-icon_901408-589.jpg'
                      }
                      alt="User photo"
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
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
              </ItemLabel>
              <div className="mb-6">
                <p className="text-2x mb-3">Your gender identity</p>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <RadioGroup.Root
                      className="flex items-center gap-1"
                      {...field}
                      onValueChange={field.onChange}
                    >
                      <ItemLabel className="m-0! flex items-center gap-2">
                        <RadioBtn value={Gender.female} id="r1" />
                        <Label className="m-0!" htmlFor="r1">
                          For woman
                        </Label>
                      </ItemLabel>
                      <ItemLabel className="m-0! flex items-center gap-2">
                        <RadioBtn value={Gender.male} id="r2" />
                        <Label className="m-0!" htmlFor="r2">
                          For man
                        </Label>
                      </ItemLabel>
                    </RadioGroup.Root>
                  )}
                />
              </div>
              <FormField name="name" errorMessage={errors.name?.message}>
                <ItemLabel className="mb-6">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    type="text"
                    placeholder="David"
                    id="name"
                    {...register('name')}
                  />
                  <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </ItemLabel>
              </FormField>
              <FormField name="email" errorMessage={errors.email?.message}>
                <ItemLabel className="desktop-m:mb-0 mb-6">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="david01@gmail.com"
                    {...register('email')}
                  />
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </ItemLabel>
              </FormField>
            </div>
            <div className="desktop-m:w-[392px]">
              <h2 className="text-2x mb-3 font-medium">Password</h2>
              <FormField
                name="currentPassword"
                errorMessage={errors.currentPassword?.message}
              >
                <ItemLabel className="mb-6">
                  <Label htmlFor="currentPassword">Outdated password:</Label>
                  <PasswordInput
                    placeholder="Password"
                    id="currentPassword"
                    {...register('currentPassword')}
                  />

                  <ErrorMessage>{errors.currentPassword?.message}</ErrorMessage>
                </ItemLabel>
              </FormField>
              <FormField
                name="newPassword"
                errorMessage={errors.newPassword?.message}
              >
                <ItemLabel className="mb-6">
                  <Label htmlFor="newPassword">New password:</Label>
                  <PasswordInput
                    placeholder="Password"
                    id="newPassword"
                    {...register('newPassword')}
                  />

                  <ErrorMessage>{errors.newPassword?.message}</ErrorMessage>
                </ItemLabel>
              </FormField>
              <FormField
                name="confirmNewPassword"
                errorMessage={errors.confirmNewPassword?.message}
              >
                <ItemLabel className="desktop-m:mb-0">
                  <Label htmlFor="confirmNewPassword">
                    Repeat new password:
                  </Label>
                  <PasswordInput
                    placeholder="Password"
                    id="confirmNewPassword"
                    {...register('confirmNewPassword')}
                  />

                  <ErrorMessage>
                    {errors.confirmNewPassword?.message}
                  </ErrorMessage>
                </ItemLabel>
              </FormField>
            </div>
          </div>
          <Button
            className="tablet-ms:ml-auto! tablet-ms:w-40 w-full"
            type="submit"
          >
            Save
          </Button>
        </Form>
      </ScrollAreaBar>
    </DialogContainer>
  );
};
