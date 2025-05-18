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
    expect(screen.getByTestId('charCounter')).toHaveTextContent('500 caractères restants sur 500');
    expect(screen.getByTestId('sr-charCounter')).toHaveTextContent(
      '500 caractères restants sur 500'
    );
    expect(screen.getByTestId('textarea-error')).toHaveClass('visible');
  });

  it('should ajust characters count', () => {
    vi.spyOn(reactHookForm, 'useController').mockReturnValue({
      field: {
        name: 'message',
        value:
          '1O6L7h6XeV55X70cEtLrLh37e4yZBxNhaOq5DTqy27dNtpuN2nu1Cofl4FPpqcaKD3irVAnloRCDu8zRwvRHxWhZZmiEUgsL9nkf8z7S5id2riKnx8Ex7Pl3PFBbE9aDyZwVfWVcNEZL4GbEAgy7ixI9ZWG48N3mPm6nPM9exIkU4CSk6Kzdl5rS0mLCK94fcjclC6THJTWVCz9gGxu23FJSWKJ8OlZZ6iRMxTH2p90B5ISMw9PzIHZ0IY9ZYTuCItQVezuCkp0pPB7qlanGeHfNURLst6VkxObrFCU1TuRYQwRnEyzqp8xk29BirpNVX1OcKgLddj3hPtR4xSGmAxfSL0K2qOYF5NTg2sIeU1cchMfF2ATOPGnbe7cUSazYWBnjwVi7DUyZ2KS8EunfWjVy8bHKHZ6mfKlynsDElhEiStROPn82WengaOp67Bh7c8QKVpeR3vw04Uv5dZo5NBM9l7vxQzCb63kJXnqhjLq9CrfyiI6X2324'
      } as unknown as reactHookForm.ControllerRenderProps,
      fieldState: {} as unknown as reactHookForm.ControllerFieldState,
      formState: {} as unknown as reactHookForm.UseFormStateReturn<ContactFormProps>
    });

    render(<Textarea {...defaultTextareaProps} control={control} />);

    expect(screen.getByTestId('charCounter')).toHaveTextContent('0 caractère restant sur 500');
  });
});
