import ContactForm from './ContactForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as http from '@/utils/http';
import * as toast from '@/utils/toast';

const mockPush = vi.fn();

vi.mock('next/navigation', async () => ({
  ...(await vi.importActual('next/navigation')),
  useRouter: () => ({ push: mockPush })
}));

describe('ContactForm', () => {
  it('should render component', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText('Nom')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Nom' })).toBeInTheDocument();
    expect(screen.getByLabelText('Nom de la société')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Nom de la société' })).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Message' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Soumettre' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Soumettre' })).toBeDisabled();
  });

  it('should success on submit and push to confirmation', async () => {
    const fetcherSpy = vi
      .spyOn(http, 'fetcher')
      .mockResolvedValue({ message: 'Email sent with success' });

    render(<ContactForm />);

    await userEvent.type(screen.getByRole('textbox', { name: 'Nom' }), 'Moon');
    await userEvent.type(screen.getByRole('textbox', { name: 'Nom de la société' }), 'New World');
    await userEvent.type(screen.getByRole('textbox', { name: 'Email' }), 'moon@newworld.com');
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Message' }),
      'Welcome to the New World !'
    );

    expect(screen.getByRole('button', { name: 'Soumettre' })).toBeEnabled();

    await userEvent.click(screen.getByRole('button', { name: 'Soumettre' }));

    expect(fetcherSpy).toHaveBeenCalledOnce();
    expect(mockPush).toHaveBeenCalledExactlyOnceWith('/contact/confirmation');
  });

  it('should fail on submit and display a toast', async () => {
    const fetcherSpy = vi.spyOn(http, 'fetcher').mockRejectedValue({});
    const toastErrorSpy = vi.spyOn(toast, 'toastError');

    render(<ContactForm />);

    await userEvent.type(screen.getByRole('textbox', { name: 'Nom' }), 'Moon');
    await userEvent.type(screen.getByRole('textbox', { name: 'Nom de la société' }), 'New World');
    await userEvent.type(screen.getByRole('textbox', { name: 'Email' }), 'moon@newworld.com');
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Message' }),
      'Welcome to the New World !'
    );

    expect(screen.getByRole('button', { name: 'Soumettre' })).toBeEnabled();

    await userEvent.click(screen.getByRole('button', { name: 'Soumettre' }));

    expect(fetcherSpy).toHaveBeenCalledOnce();
    expect(toastErrorSpy).toHaveBeenCalledOnce();
  });
});
