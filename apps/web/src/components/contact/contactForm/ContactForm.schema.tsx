import zod from 'zod';

const MIN_CHAR_MESSAGE = 'Minimum 2 caractères';
const MAX_CHAR_MESSAGE = 'Maximum 50 caractères';

export const contactFormSchema = zod.object({
  companyName: zod
    .string()
    .min(2, { message: MIN_CHAR_MESSAGE })
    .max(50, { message: MAX_CHAR_MESSAGE }),
  email: zod.string().email({ message: 'Le format est incorrect' }),
  message: zod
    .string()
    .min(2, { message: MIN_CHAR_MESSAGE })
    .max(500, { message: 'Maximum 500 caractères' }),
  name: zod.string().min(2, { message: MIN_CHAR_MESSAGE }).max(50, { message: MAX_CHAR_MESSAGE })
});

export type ContactFormProps = zod.infer<typeof contactFormSchema>;
