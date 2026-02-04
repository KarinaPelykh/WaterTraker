import clsx from 'clsx';
import { type ComponentProps } from 'react';

type Form = ComponentProps<'form'>;

type FromProps = Form & {};

// const FormFiledContext = createContext(null);

// const useFormFiledContext = () => {
//   const filedContext = useContext(FormFiledContext);
//   if (!filedContext) {
//     throw new Error('useFormFiledContext must be used inside <FormField>');
//   }

//   return filedContext;
// };

// export const FormField = (className, ...props) => {
//   return (
//     <FormFiledContext value={}>
//       <div className="" {...props} />;
//     </FormFiledContext>
//   );
// };

export function Form({ ...props }: FromProps) {
  return <form {...props} />;
}

export function Label({ className, ...props }: ComponentProps<'label'>) {
  return <label className={clsx('text-2x mb-2 block', className)} {...props} />;
}

export function ItemLabel({ className, ...props }: ComponentProps<'div'>) {
  return <div className={clsx(className, 'mb-4')} {...props} />;
}

export function ErrorMessage({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  );
}
