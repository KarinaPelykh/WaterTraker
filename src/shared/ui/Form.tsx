import clsx from 'clsx';
import {
  createContext,
  useContext,
  useMemo,
  type ComponentProps,
  type ReactNode,
} from 'react';
import {
  FormProvider,
  useFormContext,
  type FieldValues,
  type UseFormReturn,
} from 'react-hook-form';

type FomFormFiledType = {
  className?: string;
  name: string;
  children?: ReactNode;
};

type FomFormFiledContext = {
  className?: string;
  name: string;
  errorMessage?: string;
};

type FormProps<T extends FieldValues> = ComponentProps<'form'> & {
  form: UseFormReturn<T>;
};

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
  children,
  ...props
}: FomFormFiledType) => {
  const {
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  const value = useMemo(
    () => ({ errorMessage, className, name }),
    [errorMessage, className, name],
  );

  return (
    <FormFiledContext.Provider value={value}>
      <div className={clsx(className)} {...props}>
        {children}
      </div>
    </FormFiledContext.Provider>
  );
};

export function Form<T extends FieldValues>({ form, ...props }: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form {...props} />
    </FormProvider>
  );
}

export function Label({ className, ...props }: ComponentProps<'label'>) {
  return <label className={clsx('text-2x mb-2 block', className)} {...props} />;
}

export function ItemLabel({ className, ...props }: ComponentProps<'div'>) {
  return <div className={clsx(className, 'mb-4 block')} {...props} />;
}

export function Input({ className, ...props }: ComponentProps<'input'>) {
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

export function ErrorMessage({ className, ...props }: ComponentProps<'div'>) {
  const { errorMessage } = useFormFiled();

  return (
    <div
      className={clsx(className, errorMessage && 'text-error-color')}
      {...props}
    >
      {errorMessage}
    </div>
  );
}
