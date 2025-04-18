import * as reactHookForm from 'react-hook-form';
import { render, renderHook, screen } from '@testing-library/react';

import { CONTACT_FORM_LABELS } from '@/constants/form';

import type { ContactFormProps } from '@/components/contact/contactForm/ContactForm.schema';

import Input, { type InputProps } from './Input';

vi.mock('react-hook-form', async () => ({
  ...(await vi.importActual('react-hook-form')),
  useController: () => ({ fieldState: { error: { type: 'minLength' } } })
}));

const defaultInputProps = {
  autoComplete: 'off',
  labels: CONTACT_FORM_LABELS,
  name: 'name'
} satisfies Omit<InputProps<ContactFormProps>, 'control'>;

describe('Input', () => {
  const {
    result: {
      current: { control }
    }
  } = renderHook(() => reactHookForm.useForm());

  it('should render component', () => {
    render(<Input {...defaultInputProps} control={control} />);

    expect(screen.getByLabelText('Nom')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Nom' })).toBeInTheDocument();
    expect(screen.getByTestId('input-error')).toHaveClass('visible');
  });
});
