import type { HTMLInputAutoCompleteAttribute } from 'react';
import { type Control, type FieldPath, type FieldValues, useController } from 'react-hook-form';

import type { FormLabelsProps } from '@/types/globals';

import TriangleAlertIcon from '@/assets/triangle-alert.svg';

export type InputProps<T extends FieldValues> = {
  autoComplete: HTMLInputAutoCompleteAttribute | undefined;
  control: Control<T>;
  labels: Record<FieldPath<T>, FormLabelsProps>;
  name: FieldPath<T>;
};

const Input = <T extends FieldValues>({ autoComplete, control, labels, name }: InputProps<T>) => {
  const {
    field,
    fieldState: { error }
  } = useController({ control, name });

  const { label, placeholder } = labels[name];

  return (
    <div className='flex w-full flex-col gap-2'>
      <label htmlFor={name}>{label}</label>
      <input
        aria-invalid={!!error}
        autoComplete={autoComplete}
        className={`border-default-border placeholder:text-default-text-tertiary rounded-lg border px-4 py-3 ${error ? 'border-red-700 text-red-700 focus:outline-red-700' : ''}`}
        id={name}
        placeholder={placeholder}
        type='text'
        {...field}
      />
      <div
        className={`${error ? 'visible' : 'invisible'} flex h-6 items-center gap-2 text-sm text-red-700`}
        data-testid='input-error'
      >
        <div className='h-4 w-4'>
          <TriangleAlertIcon aria-hidden={true} />
        </div>
        <p>{error?.message}</p>
      </div>
    </div>
  );
};

export default Input;
