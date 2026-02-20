import clsx from 'clsx';
import {
  createContext,
  useContext,
  useMemo,
  type ComponentProps,
  type ReactNode,
} from 'react';

type FomFormFiledType = {
  className?: string;
  errorMessage?: string;
  name: string;
  children?: ReactNode;
};

type FomFormFiledContext = {
  className?: string;
  errorMessage?: string;
  name: string;
};

type Input = ComponentProps<'input'>;

type InputProps = Input & {};

const FormFiledContext = createContext<FomFormFiledContext | null>(null);

const useFormFiled = () => {
  const filedContext = useContext(FormFiledContext);
  if (!filedContext) {
    throw new Error('useFormFiledContext must be used inside <FormField>');
  }

  return filedContext;
};

export const FormField = ({
  name,
  className,
  errorMessage,
  children,
  ...props
}: FomFormFiledType) => {
  const err = errorMessage?.[name]?.message;

  const value = useMemo(
    () => ({ err, className, name }),
    [err, className, name],
  );

  return (
    <FormFiledContext value={value}>
      <div className={clsx(className)} {...props}>
        {children}
      </div>
    </FormFiledContext>
  );
};

export function Form({ ...props }: ComponentProps<'form'>) {
  return <form {...props} />;
}

export function Label({ className, ...props }: ComponentProps<'label'>) {
  return <label className={clsx('text-2x mb-2 block', className)} {...props} />;
}

export function ItemLabel({ className, ...props }: ComponentProps<'div'>) {
  return <div className={clsx(className, 'mb-4 block')} {...props} />;
}

export function Input({ className, ...props }: InputProps) {
  const { err } = useFormFiled();

  return (
    <input
      className={clsx(
        'text-1x border-middle-blue placeholder:text-middle-blue block w-full rounded-xs border bg-white px-2.5 py-3 outline-none',
        err && 'border-error-color!',
        className,
      )}
      {...props}
    />
  );
}

export function ErrorMessage({ className, ...props }: ComponentProps<'div'>) {
  const { err } = useFormFiled();

  return (
    <div className={clsx(className, err && 'text-error-color')} {...props}>
      {err}
    </div>
  );
}
