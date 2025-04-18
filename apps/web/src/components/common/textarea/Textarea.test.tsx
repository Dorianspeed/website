import * as reactHookForm from 'react-hook-form';
import { render, renderHook, screen } from '@testing-library/react';

import { CONTACT_FORM_LABELS } from '@/constants/form';

import type { ContactFormProps } from '@/components/contact/contactForm/ContactForm.schema';

import Textarea, { type TextareaProps } from './Textarea';

vi.mock('react-hook-form', async () => ({
  ...(await vi.importActual('react-hook-form')),
  useController: () => ({ fieldState: { error: { type: 'minLength' } } })
}));

const defaultTextareaProps = {
  labels: CONTACT_FORM_LABELS,
  name: 'message'
} satisfies Omit<TextareaProps<ContactFormProps>, 'control'>;

describe('Textarea', () => {
  const {
    result: {
      current: { control }
    }
  } = renderHook(() => reactHookForm.useForm());

  it('should render component', () => {
    render(<Textarea {...defaultTextareaProps} control={control} />);

    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Message' })).toBeInTheDocument();
    expect(screen.getByTestId('textarea-error')).toHaveClass('visible');
  });
});
