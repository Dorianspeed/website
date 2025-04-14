import type { ContactInformationPropsKey, LabelProps } from '@/types/globals';

export const CONTACT_INFORMATION_LABELS = {
  companyName: { position: 2, title: 'Le nom de votre société :' },
  email: { position: 3, title: 'Votre email :' },
  message: { position: 4, title: 'Votre message :' },
  name: { position: 1, title: 'Votre nom :' }
} satisfies Record<ContactInformationPropsKey, LabelProps>;
