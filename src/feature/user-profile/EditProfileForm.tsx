import * as RadioGroup from '@radix-ui/react-radio-group';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';

import { useEditUserProfile } from './api/useEditUserProfile';
import { EditUserPhoto } from './EditUserPhoto';
import { UserProfileSchema } from './model/contract';
import { useGetUserInfo } from '../../pages/dashboard/api/useGetUserInfo';
import { useAppForm } from '../../shared/hooks/useAppForm';
import { DialogContainer } from '../../shared/ModalContent/DialogContainer';
import {
  PasswordInput,
  Button,
  ScrollAreaBar,
  RadioBtn,
} from '../../shared/ui';
import {
  ErrorMessage,
  Form,
  FormField,
  ItemLabel,
  Label,
  Input,
} from '../../shared/ui/Form';

type UserProfileProps = {
  setIsOpen: (value: boolean) => void;
};

const Gender = {
  male: 'male',
  female: 'woman',
};

export const EditProfileForm = ({ setIsOpen }: UserProfileProps) => {
  const form = useAppForm(UserProfileSchema, {
    defaultValues: {
      email: '',
      name: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      gender: '',
    },
  });

  const { mutate: updateUserDate } = useEditUserProfile({
    setIsOpen,
    reset: form.reset,
  });

  const { data } = useGetUserInfo();

  useEffect(() => {
    const name = data?.name ?? '';
    if (data) {
      form.reset({ name, email: data.email, gender: data.gender });
    }
  }, [data, form]);

  return (
    <DialogContainer
      title="Setting"
      className="tablet-ms:w-[704px] desktop-m:w-[1008px]"
    >
      <ScrollAreaBar className="flex min-h-0 flex-1" scrollClassName="hidden">
        <Form
          form={form}
          className="flex flex-col"
          onSubmit={form.handleSubmit((data) => updateUserDate(data))}
        >
          <div className="desktop-m:flex desktop-m:w-full desktop-m:items-end desktop-m:gap-10 tablet-ms:w-[392px] mb-6">
            <div className="desktop-m:w-[392px]">
              <ItemLabel className="mb-6!">
                <Label>Your photo</Label>
                <EditUserPhoto image={data?.image} />
              </ItemLabel>
              <div className="mb-6">
                <p className="text-2x mb-3">Your gender identity</p>
                <Controller
                  name="gender"
                  control={form.control}
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
              <FormField name="name">
                <ItemLabel className="mb-6">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    type="text"
                    placeholder="David"
                    id="name"
                    {...form.register('name')}
                  />
                  <ErrorMessage />
                </ItemLabel>
              </FormField>
              <FormField name="email">
                <ItemLabel className="desktop-m:mb-0 mb-6">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="david01@gmail.com"
                    {...form.register('email')}
                  />
                  <ErrorMessage />
                </ItemLabel>
              </FormField>
            </div>
            <div className="desktop-m:w-[392px]">
              <h2 className="text-2x mb-3 font-medium">Password</h2>
              <FormField name="currentPassword">
                <ItemLabel className="mb-6">
                  <Label htmlFor="currentPassword">Outdated password:</Label>
                  <PasswordInput
                    placeholder="Password"
                    id="currentPassword"
                    {...form.register('currentPassword')}
                  />

                  <ErrorMessage />
                </ItemLabel>
              </FormField>
              <FormField name="newPassword">
                <ItemLabel className="mb-6">
                  <Label htmlFor="newPassword">New password:</Label>
                  <PasswordInput
                    placeholder="Password"
                    id="newPassword"
                    {...form.register('newPassword')}
                  />

                  <ErrorMessage />
                </ItemLabel>
              </FormField>
              <FormField name="confirmNewPassword">
                <ItemLabel className="desktop-m:mb-0">
                  <Label htmlFor="confirmNewPassword">
                    Repeat new password:
                  </Label>
                  <PasswordInput
                    placeholder="Password"
                    id="confirmNewPassword"
                    {...form.register('confirmNewPassword')}
                  />

                  <ErrorMessage />
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
