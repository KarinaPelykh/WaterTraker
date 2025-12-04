import { Link } from 'react-router-dom';
import { Button } from '../shared/Button';
import { Form, ItemLabel, Label } from '../shared/Form';
import { Input } from '../shared/Input';
import { PasswordInput } from '../shared/PasswordInput';

export function Signup() {
  return (
    <section className="tablet-ms:pb-[172px] desktop-m:pb-10 min-h-screen overflow-hidden pb-5">
      <div className="tablet-ms:flex desktop-m:flex-row-reverse desktop-m:items-center desktop-m:justify-center relative container">
        <Form className="mobile:w-[336px] max-tablet-ms:mx-auto desktop-m:w-[384px]">
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
          <Button className="text-2x! mb-4! w-full py-2.5" type="submit">
            Sign Up
          </Button>
          <Link to="/" className="text-blue text-1x">
            Sign in
          </Link>
        </Form>
        <img
          className="tablet-ms:-right-28 max-tablet-ms:max-w-[336px] desktop-m:-ml-38 desktop-m:max-w-[916px] desktop-m:max-h-[680px] tablet-ms:max-w-[736px] tablet-ms:max-h-[548px] max-tablet-ms:mx-auto tablet-ms:-bottom-38 tablet-ms:absolute desktop-m:static"
          src="/signup-desk.png"
          alt="Botel of water"
          width={280}
          height={210}
        />
      </div>
    </section>
  );
}
