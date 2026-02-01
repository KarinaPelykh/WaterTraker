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
import { ScrollAreaBar } from '../ScrollAreaBar';
import { RadioBtn } from '../RadioBtn';
import * as RadioGroup from '@radix-ui/react-radio-group';

type UserProfileProps = {
  setIsOpen: (value: boolean) => void;
};

const Gender = {
  male: 'male',
  female: 'woman',
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
    <ModalContainer className="tablet-ms:w-[704px] desktop-m:w-[1008px] flex">
      <ScrollAreaBar className="flex min-h-0 flex-1" scrollClassName="hidden">
        <Form
          className="flex flex-col"
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

          <div className="desktop-m:flex desktop-m:w-full desktop-m:items-end desktop-m:gap-10 tablet-ms:w-[392px] mb-6">
            <div className="desktop-m:w-[392px]">
              <ItemLabel className="mb-6!">
                <Label>Your photo</Label>

                <div className="flex items-center">
                  <img
                    src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                    alt="User photo"
                    width={80}
                    height={80}
                    className="size-20! rounded-full"
                  />

                  <div className="text-blue relative flex cursor-pointer text-base">
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

              <ItemLabel className="mb-6">
                <Label>Your name</Label>
                <Input
                  type="text"
                  placeholder="David"
                  id="name"
                  {...register('name')}
                />
              </ItemLabel>
              <ItemLabel className="desktop-m:mb-0 mb-6">
                <Label>E-mail</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="david01@gmail.com"
                  {...register('email')}
                />
              </ItemLabel>
            </div>
            <div className="desktop-m:w-[392px]">
              <h2 className="text-2x mb-3 font-medium">Password</h2>
              <ItemLabel className="mb-6">
                <Label>Outdated password:</Label>
                <PasswordInput
                  placeholder="Password"
                  id="password"
                  {...register('password')}
                />
              </ItemLabel>
              <ItemLabel className="mb-6">
                <Label>New password:</Label>
                <PasswordInput
                  placeholder="Password"
                  id="password"
                  {...register('password')}
                />
              </ItemLabel>
              <ItemLabel className="desktop-m:mb-0">
                <Label>Repeat new password:</Label>
                <PasswordInput
                  placeholder="Password"
                  id="password"
                  {...register('password')}
                />
              </ItemLabel>
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
    </ModalContainer>
  );
};
