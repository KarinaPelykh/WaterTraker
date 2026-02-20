import { Link } from 'react-router-dom';

import { useSignin } from './api/useSignin';
import { UserSigninSchema } from './model/contact';
import { useAppForm } from '../../shared/hooks/useAppForm';
import { Loader, Button } from '../../shared/ui';
import {
  ErrorMessage,
  Form,
  FormField,
  ItemLabel,
  Label,
  Input,
} from '../../shared/ui/Form';

export function Signin() {
  const form = useAppForm(UserSigninSchema, {
    defaultValues: { email: '', password: '' },
  });

  const { mutate: signin, isPending } = useSignin(form.reset);

  return (
    <section className="tablet-ms:pb-[264px] tablet-ms:pt-10 desktop-m:pb-10 desktop-m:pt-5 max-h-screen overflow-hidden pt-6 pb-5">
      <div className="tablet-ms:flex desktop-m:flex-row-reverse desktop-m:items-center desktop-m:justify-center tablet-ms:relative container">
        <Form
          form={form}
          className="mobile:w-[336px] max-tablet-ms:mx-auto desktop-m:w-[384px]"
          onSubmit={form.handleSubmit((data) => {
            signin(data);
          })}
        >
          <p className="text-4x mb-4">Sign in</p>
          <FormField name="email">
            <ItemLabel>
              <Label htmlFor="email">Enter your email</Label>
              <Input
                type="email"
                id="email"
                placeholder="E-mail"
                {...form.register('email')}
              />
              <ErrorMessage />
            </ItemLabel>
          </FormField>
          <FormField name="password">
            <ItemLabel>
              <Label htmlFor="password">Enter your password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                {...form.register('password')}
              />
              <ErrorMessage />
            </ItemLabel>
          </FormField>
          <Button
            type="submit"
            className="text-2x! mb-4! flex w-full items-center justify-center gap-5 py-2.5"
          >
            Sign In {isPending && <Loader />}
          </Button>
          <Link to="/signup" className="text-blue text-1x">
            Sign up
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
