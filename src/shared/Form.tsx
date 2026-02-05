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
  // const { errorMessage } = useFormFiled();

  return (
    <label
      className={clsx(
        'text-2x mb-2 block',
        className,
        // errorMessage && 'border-error-color',
      )}
      {...props}
    />
  );
}

export function ItemLabel({ className, ...props }: ComponentProps<'div'>) {
  return <div className={clsx(className, 'mb-4')} {...props} />;
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
