import { Link } from 'react-router-dom';
import { Button } from '../shared/Button';
import { Form, ItemLabel, Label } from '../shared/Form';
import { Input } from '../shared/Input';
import { PasswordInput } from '../shared/PasswordInput';

export function Signup() {
  return (
    <section className="tablet-ms:pb-[172px] overflow-hidden pb-5">
      <div className="container">
        <Form className="tablet-ms:w-[336px] mb-4">
          <p className="text-4x mb-4">Sign In</p>
          <ItemLabel>
            <Label htmlFor="email">Enter your email</Label>
            <Input placeholder="E-mail" id="email" />
          </ItemLabel>
          <ItemLabel>
            <Label htmlFor="password">Enter your password</Label>
            <PasswordInput placeholder="Password" id="password" />
          </ItemLabel>
          <ItemLabel>
            <Label htmlFor="conf-password">Repeat password</Label>
            <PasswordInput placeholder="Repeat password" id="conf-password" />
          </ItemLabel>
          <Button className="text-2x! w-full py-2.5" type="submit">
            Sign Up
          </Button>
        </Form>
        <div className="relative">
          <Link to="/" className="text-blue text-1x absolute top-0 left-0 z-10">
            Sign in
          </Link>
          <img
            className="tablet-ms:-top-[350px] tablet-ms:-z-10 tablet-ms:left-28 tablet-ms:absolute tablet-ms:w-[736px] tablet-ms:h-[548px]"
            src="/signup-desk.png"
            alt="Botel of water"
            width={280}
            height={210}
          />
        </div>
      </div>
    </section>
  );
}
