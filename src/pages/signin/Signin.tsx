import { Link } from 'react-router-dom';
import { Button } from '../../shared/Button';
import { ErrorMessage, Form, ItemLabel, Label } from '../../shared/Form';
import { Input } from '../../shared/Input';
import { useForm } from 'react-hook-form';
import { UserSigninSchema, type UserSignin } from './model/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignin } from './api/useSignin';

export function Signin() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSignin>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(UserSigninSchema),
  });

  const { mutate: signin } = useSignin(reset);

  return (
    <section className="tablet-ms:pb-[264px] tablet-ms:pt-10 desktop-m:pb-10 desktop-m:pt-5 max-h-screen overflow-hidden pt-6 pb-5">
      <div className="tablet-ms:flex desktop-m:flex-row-reverse desktop-m:items-center desktop-m:justify-center tablet-ms:relative container">
        <Form
          className="mobile:w-[336px] max-tablet-ms:mx-auto desktop-m:w-[384px]"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            signin(data);
          })}
        >
          <p className="text-4x mb-4">Sign in</p>
          <ItemLabel>
            <Label htmlFor="email">Enter your email</Label>
            <Input
              type="email"
              id="email"
              placeholder="E-mail"
              {...register('email')}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </ItemLabel>
          <ItemLabel>
            <Label htmlFor="password">Enter your password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              {...register('password')}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </ItemLabel>
          <Button type="submit" className="text-2x! mb-4! w-full py-2.5">
            Sign In
          </Button>
          <Link to="/signup" className="text-blue text-1x">
            Sign up
          </Link>
        </Form>
        <img
          className="tablet-ms:-right-28 max-tablet-ms:max-w-[336px] desktop-m:-ml-38 desktop-m:max-w-[916px] desktop-m:max-h-[680px] tablet-ms:max-w-[736px] tablet-ms:max-h-[548px] max-tablet-ms:mx-auto tablet-ms:top-0 tablet-ms:absolute desktop-m:static"
          src="/signup-desk.png"
          alt="Botel of water"
        />
      </div>
    </section>
  );
}
