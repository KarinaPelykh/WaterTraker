import { Link } from 'react-router-dom';
import {
  ErrorMessage,
  Form,
  FormField,
  ItemLabel,
  Label,
  Input,
} from '../../shared/ui/Form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSignupSchema, type UserSignup } from './model/contract';
import { useSignup } from './api/useSignup';
import { Loader, Button, PasswordInput } from '../../shared/ui';

export function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSignup>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(UserSignupSchema),
  });

  const { mutate: signup, isPending } = useSignup(reset);

  return (
    <section className="tablet-ms:pb-[172px] tablet-ms:pt-10 desktop-m:pb-10 desktop-m:pt-5 min-h-screen overflow-hidden pt-6 pb-5">
      <div className="tablet-ms:flex desktop-m:flex-row-reverse desktop-m:items-center desktop-m:justify-center relative container">
        <Form
          className="mobile:w-[336px] max-tablet-ms:mx-auto desktop-m:w-[384px]"
          onSubmit={handleSubmit(({ email, password }) =>
            signup({ email, password }),
          )}
        >
          <p className="text-4x mb-4">Sign up</p>
          <FormField name="email" errorMessage={errors.email?.message}>
            <ItemLabel>
              <Label htmlFor="email">Enter your email</Label>
              <Input placeholder="E-mail" id="email" {...register('email')} />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </ItemLabel>
          </FormField>
          <FormField name="password" errorMessage={errors.password?.message}>
            <ItemLabel>
              <Label htmlFor="password">Enter your password</Label>
              <PasswordInput
                placeholder="Password"
                id="password"
                {...register('password')}
              />
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </ItemLabel>
          </FormField>
          <FormField
            name="conf-password"
            errorMessage={errors.confirmPassword?.message}
          >
            <ItemLabel>
              <Label htmlFor="conf-password">Repeat password</Label>
              <PasswordInput
                placeholder="Repeat password"
                id="conf-password"
                {...register('confirmPassword')}
              />
              <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
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
          alt="Botel of water"
          width={280}
          height={210}
        />
      </div>
    </section>
  );
}
