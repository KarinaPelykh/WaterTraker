import * as Dialog from '@radix-ui/react-dialog';
import { Form, ItemLabel, Label } from '../Form';
import { ModalContainer } from './ModalContainer';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { PasswordInput } from '../PasswordInput';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Button } from '../Button';
import { useEditUserProfile } from '../../pages/account/api/useEditUserProfile';
import { useGetUserInfo } from '../../pages/account/api/useGetUserInfo';

type UserProfileProps = {
  setIsOpen: (value: boolean) => void;
};

export const UserProfile = ({ setIsOpen }: UserProfileProps) => {
  const { register, reset, handleSubmit } = useForm<{
    email: string;
    name: string;
    password: string;
  }>();

  const { data } = useGetUserInfo();

  const { mutate: addUserProfile } = useEditUserProfile();

  useEffect(() => {
    const name = data?.name ?? '';
    if (data) {
      reset({ name, email: data.email });
    }
  }, [data, reset]);

  return (
    <ModalContainer className="desktop-m:w-[1008px]">
      <Form
        onSubmit={handleSubmit((user) => {
          addUserProfile(user);
          setIsOpen(false);
        })}
      >
        <div className="mb-6 flex items-center justify-between">
          <Dialog.Title className="text-4x">Setting</Dialog.Title>
          <Dialog.Close className="rotate-45 cursor-pointer">
            <Icon iconName="plus" className="stroke-blue size-6" />
          </Dialog.Close>
        </div>

        <div className="flex gap-10">
          <div>
            <ItemLabel>
              <Label>Your photo</Label>

              <div className="flex items-center">
                <img
                  src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                  alt="User photo"
                  width={80}
                  height={80}
                  className="size-20! rounded-full"
                />

                <div className="text-blue relative flex cursor-pointer">
                  <Icon
                    iconName="arrow-up"
                    className="stroke-blue mr-2 size-4"
                  />
                  Upload photo
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    className="absolute top-0 left-0 w-full opacity-0"
                  />
                </div>
              </div>
            </ItemLabel>
            <ItemLabel>
              <Label>Your name</Label>
              <Icon iconName="upload" className="stroke-blue size-6" />
              <Input
                type="text"
                placeholder="David"
                id="name"
                {...register('name')}
              />
            </ItemLabel>
            <ItemLabel>
              <Label>E-mail</Label>
              <Icon iconName="upload" className="stroke-blue size-6" />

              <Input
                type="email"
                id="email"
                placeholder="david01@gmail.com"
                {...register('email')}
              />
            </ItemLabel>
          </div>
          <div>
            <h2>Password</h2>
            <ItemLabel>
              <Label>Outdated password:</Label>
              <Icon iconName="upload" className="stroke-blue size-6" />
              <PasswordInput
                placeholder="Password"
                id="password"
                {...register('password')}
              />
            </ItemLabel>
            <ItemLabel>
              <Label>New password:</Label>
              <Icon iconName="upload" className="stroke-blue size-6" />
              <PasswordInput
                placeholder="Password"
                id="password"
                {...register('password')}
              />
            </ItemLabel>
            <ItemLabel>
              <Label>Repeat new password:</Label>
              <Icon iconName="upload" className="stroke-blue size-6" />
              <PasswordInput
                placeholder="Password"
                id="password"
                {...register('password')}
              />
            </ItemLabel>
          </div>
        </div>
        <Button type="submit">Save</Button>
      </Form>
    </ModalContainer>
  );
};
