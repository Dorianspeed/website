import { useId } from 'react';
import { type Control, type FieldPath, type FieldValues, useController } from 'react-hook-form';

import type { FormLabelsProps } from '@/types/globals';

import { TEXTAREA_MAX_LENGTH } from '@/components/contact/contactForm/ContactForm.schema';

import TriangleAlertIcon from '@/assets/triangle-alert.svg';

import SvgIcon from '../svgIcon/SvgIcon';

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

  const htmlForId = useId();
  const charCounter = useId();

  const textareaCount = TEXTAREA_MAX_LENGTH - (field?.value.length || 0);
  const remainingCharsMessage = `${textareaCount > 0 ? textareaCount : 0} ${textareaCount > 1 ? 'caractères restants' : 'caractère restant'} sur ${TEXTAREA_MAX_LENGTH}`;
  const { label, placeholder } = labels[name];

  return (
    <div className='flex w-full flex-col gap-2'>
      <label htmlFor={htmlForId}>{label}</label>
      <textarea
        aria-describedby={`charCounter-${charCounter}`}
        aria-invalid={!!error}
        className={`border-default-border placeholder:text-default-text-tertiary rounded-lg border px-4 py-3 ${error ? 'border-red-700 text-red-700 focus:outline-red-700' : ''}`}
        id={htmlForId}
        lang='fr'
        placeholder={placeholder}
        rows={5}
        spellCheck={true}
        {...field}
      />
      <p aria-hidden={true} className='self-end' data-testid='charCounter'>
        {remainingCharsMessage}
      </p>
      <p
        className='sr-only'
        data-testid='sr-charCounter'
        id={`charCounter-${charCounter}`}
        role='status'
      >
        {remainingCharsMessage}
      </p>
      <div
        className={`${error ? 'visible' : 'invisible'} flex h-6 items-center gap-2 text-sm text-red-700`}
        data-testid='textarea-error'
      >
        <SvgIcon dataTest={undefined} icon={TriangleAlertIcon} size={4} />
        <p>{error?.message}</p>
      </div>
    </div>
  );
};

export default Textarea;
