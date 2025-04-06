import { type Control, type FieldPath, type FieldValues, useController } from 'react-hook-form';

import type { FormLabelsProps } from '@/types/globals';

import TriangleAlertIcon from '@/assets/triangle-alert.svg';

export type TextareaProps<T extends FieldValues> = {
  control: Control<T>;
  labels: Record<FieldPath<T>, FormLabelsProps>;
  name: FieldPath<T>;
};

const Textarea = <T extends FieldValues>({ control, labels, name }: TextareaProps<T>) => {
  const {
    field,
    fieldState: { error }
  } = useController({ control, name });

  const { label, placeholder } = labels[name];

  return (
    <div className='flex w-full flex-col gap-2'>
      <label htmlFor={name}>{label}</label>
      <textarea
        aria-invalid={!!error}
        className={`border-default-border placeholder:text-default-text-tertiary rounded-lg border px-4 py-3 ${error ? 'border-red-700 text-red-700 focus:outline-red-700' : ''}`}
        id={name}
        lang='fr'
        placeholder={placeholder}
        rows={5}
        spellCheck={true}
        {...field}
      />
      <div
        className={`${error ? 'visible' : 'invisible'} flex h-6 items-center gap-2 text-sm text-red-700`}
        data-testid='textarea-error'
      >
        <div className='size-4'>
          <TriangleAlertIcon aria-hidden={true} />
        </div>
        <p>{error?.message}</p>
      </div>
    </div>
  );
};

export default Textarea;
