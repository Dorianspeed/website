import type { FieldPath } from 'react-hook-form';

import type { FormLabelsProps } from '@/types/globals';

import type { FormProps } from '@/components/contact/contactForm/ContactForm.schema';

export const CONTACT_FORM_DEFAULT_VALUES = {
  companyName: '',
  email: '',
  message: '',
  name: ''
} satisfies FormProps;

export const CONTACT_FORM_LABELS = {
  companyName: {
    label: 'Nom de la société',
    placeholder: 'Le nom de votre société...'
  },
  email: { label: 'Email', placeholder: 'Votre email...' },
  message: { label: 'Message', placeholder: 'Votre message...' },
  name: { label: 'Nom', placeholder: 'Votre nom...' }
} satisfies Record<FieldPath<FormProps>, FormLabelsProps>;
