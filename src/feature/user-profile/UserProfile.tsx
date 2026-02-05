import {
  ErrorMessage,
  Form,
  FormField,
  ItemLabel,
  Label,
} from '../../shared/Form';
import { Icon } from '../../shared/Icon';
import { Input } from '../../shared/Input';
import { PasswordInput } from '../../shared/PasswordInput';
import { useForm } from 'react-hook-form';
import { useEffect, useState, type ChangeEvent } from 'react';
import { Button } from '../../shared/Button';
import { useEditUserProfile } from './api/useEditUserProfile';
import { useGetUserInfo } from '../../pages/account/api/useGetUserInfo';
import { ScrollAreaBar } from '../../shared/ScrollAreaBar';
import { RadioBtn } from '../../shared/RadioBtn';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { DialogContainer } from '../../shared/ModalContent/DialogContainer';
import { useAddUserPhoto } from './api/useAddUserPhoto';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfileSchema } from './model/constract';

type UserProfileProps = {
  setIsOpen: (value: boolean) => void;
};

const Gender = {
  male: 'male',
  female: 'woman',
};

export const UserProfile = ({ setIsOpen }: UserProfileProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const { data } = useGetUserInfo();

  const { mutate: addUserProfile } = useEditUserProfile();

  const { mutate: addUserPhoto } = useAddUserPhoto();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    name: string;
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }>({
    defaultValues: {
      email: '',
      name: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    resolver: zodResolver(UserProfileSchema),
  });

  useEffect(() => {
    const name = data?.name ?? '';
    if (data) {
      reset({ name, email: data.email });
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
  console.log(errors);

  return (
    <DialogContainer
      title="Setting"
      className="tablet-ms:w-[704px] desktop-m:w-[1008px] flex flex-col"
    >
      <ScrollAreaBar className="flex min-h-0 flex-1" scrollClassName="hidden">
        <Form
          className="flex flex-col"
          onSubmit={handleSubmit(
            ({ email, name, confirmNewPassword: password }) => {
              addUserProfile({ email, name, password });
              setIsOpen(false);
            },
          )}
        >
          <div className="desktop-m:flex desktop-m:w-full desktop-m:items-end desktop-m:gap-10 tablet-ms:w-[392px] mb-6">
            <div className="desktop-m:w-[392px]">
              <ItemLabel className="mb-6!">
                <Label>Your photo</Label>

                <div className="flex items-center">
                  <img
                    src={
                      selectedPhoto
                        ? selectedPhoto
                        : 'https://img.freepik.com/premium-vector/free-vector-user-icon_901408-589.jpg'
                    }
                    alt="User photo"
                    width={80}
                    height={80}
                    className="mr-2 size-20! rounded-full object-cover"
                  />

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
                <RadioGroup.Root className="flex items-center gap-6">
                  <ItemLabel className="m-0! flex items-center gap-2">
                    <RadioBtn id="" value={Gender.female} />
                    <Label className="text-1x! m-0!">Woman</Label>
                  </ItemLabel>
                  <ItemLabel className="m-0! flex items-center gap-2">
                    <RadioBtn id="" value={Gender.male} />
                    <Label className="text-1x! m-0!">Man</Label>
                  </ItemLabel>
                </RadioGroup.Root>
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
