import clsx from 'clsx';
import {
  createContext,
  useContext,
  useMemo,
  type ComponentProps,
  type ReactNode,
} from 'react';

type Form = ComponentProps<'form'>;

type FromProps = Form & {};

type FomFormFiledType = {
  className?: string;
  errorMessage?: string;
  name: string;
  children?: ReactNode;
};

type Input = ComponentProps<'input'>;

type InputProps = Input & {};

const FormFiledContext = createContext<FomFormFiledType | null>(null);

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
  const value = useMemo(
    () => ({ errorMessage, className, name }),
    [errorMessage, className, name],
  );

  return (
    <FormFiledContext value={value}>
      <div className={clsx(className)} {...props}>
        {children}
      </div>
    </FormFiledContext>
  );
};

export function Form({ ...props }: FromProps) {
  return <form {...props} />;
}

export function Label({ className, ...props }: ComponentProps<'label'>) {
  return <label className={clsx('text-2x mb-2 block', className)} {...props} />;
}

export function ItemLabel({ className, ...props }: ComponentProps<'div'>) {
  return <div className={clsx(className, 'mb-4 block')} {...props} />;
}

export function Input({ className, ...props }: InputProps) {
  const { errorMessage } = useFormFiled();
  return (
    <input
      className={clsx(
        'text-1x border-middle-blue placeholder:text-middle-blue block w-full rounded-xs border bg-white px-2.5 py-3 outline-none',
        errorMessage && 'border-error-color!',
        className,
      )}
      {...props}
    />
  );
}

export function ErrorMessage({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  const { errorMessage } = useFormFiled();

  return (
    <div
      className={clsx(className, errorMessage && 'text-error-color')}
      {...props}
    >
      {children}
    </div>
  );
}
