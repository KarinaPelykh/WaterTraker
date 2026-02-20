import { Link } from 'react-router-dom';

import { useSignup } from './api/useSignup';
import { UserSignupSchema } from './model/contract';
import { useAppForm } from '../../shared/hooks/useAppForm';
import { Loader, Button, PasswordInput } from '../../shared/ui';
import {
  ErrorMessage,
  Form,
  FormField,
  ItemLabel,
  Label,
  Input,
} from '../../shared/ui/Form';

export function Signup() {
  const form = useAppForm(UserSignupSchema, {
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate: signup, isPending } = useSignup(form.reset);

  return (
    <section className="tablet-ms:pb-[172px] tablet-ms:pt-10 desktop-m:pb-10 desktop-m:pt-5 min-h-screen overflow-hidden pt-6 pb-5">
      <div className="tablet-ms:flex desktop-m:flex-row-reverse desktop-m:items-center desktop-m:justify-center relative container">
        <Form
          form={form}
          className="mobile:w-[336px] max-tablet-ms:mx-auto desktop-m:w-[384px]"
          onSubmit={form.handleSubmit(({ email, password }) =>
            signup({ email, password }),
          )}
        >
          <p className="text-4x mb-4">Sign up</p>
          <FormField name="email">
            <ItemLabel>
              <Label htmlFor="email">Enter your email</Label>
              <Input
                placeholder="E-mail"
                id="email"
                {...form.register('email')}
              />
              <ErrorMessage />
            </ItemLabel>
          </FormField>
          <FormField name="password">
            <ItemLabel>
              <Label htmlFor="password">Enter your password</Label>
              <PasswordInput
                placeholder="Password"
                id="password"
                {...form.register('password')}
              />
              <ErrorMessage />
            </ItemLabel>
          </FormField>
          <FormField name="confirmPassword">
            <ItemLabel>
              <Label htmlFor="confirmPassword">Repeat password</Label>
              <PasswordInput
                placeholder="Repeat password"
                id="confirmPassword"
                {...form.register('confirmPassword')}
              />
              <ErrorMessage />
            </ItemLabel>
          </FormField>

          <Button
            className="text-2x! mb-4! flex w-full items-center justify-center gap-5 py-2.5"
            type="submit"
          >
            Sign Up {isPending && <Loader />}
          </Button>
          <Link to="/signin" className="text-blue text-1x">
            Sign in
          </Link>
        </Form>
        <img
          className="tablet-ms:-right-28 max-tablet-ms:max-w-[336px] desktop-m:-ml-38 desktop-m:max-w-[916px] desktop-m:max-h-[680px] tablet-ms:max-w-[736px] tablet-ms:max-h-[548px] max-tablet-ms:mx-auto tablet-ms:top-0 tablet-ms:absolute desktop-m:static -z-20"
          src="/signup-desk.png"
          alt="Bottle of water"
          width={280}
          height={210}
        />
      </div>
    </section>
  );
}
