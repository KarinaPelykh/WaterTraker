import { Button } from '../shared/Button';
import { Form, Label } from '../shared/Form';
import { Input } from '../shared/Input';

export function Signup() {
  return (
    <section>
      <div className="container">
        <Form>
          <p className="text-4x mb-4">Sign In</p>
          <Label>Enter your email</Label>
          <Input placeholder="name" />
          <Label>Enter your password</Label>
          <Input placeholder="name" />
          <Label>Repeat password</Label>
          <Input placeholder="name" />
          <Button className="w-full">Sign Up</Button>
        </Form>
      </div>
    </section>
  );
}
