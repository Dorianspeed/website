import zod from 'zod';

const MAX_CHAR_LENGTH = 50;
const MAX_CHAR_MESSAGE = `Maximum ${MAX_CHAR_LENGTH} caractères`;
const MIN_CHAR_LENGTH = 2;
const MIN_CHAR_MESSAGE = `Minimum ${MIN_CHAR_LENGTH} caractères`;
export const TEXTAREA_MAX_LENGTH = 500;

export const contactFormSchema = zod.object({
  companyName: zod
    .string()
    .min(MIN_CHAR_LENGTH, { message: MIN_CHAR_MESSAGE })
    .max(MAX_CHAR_LENGTH, { message: MAX_CHAR_MESSAGE }),
  email: zod.string().email({ message: 'Le format est incorrect' }),
  message: zod
    .string()
    .min(MIN_CHAR_LENGTH, { message: MIN_CHAR_MESSAGE })
    .max(TEXTAREA_MAX_LENGTH, { message: `Maximum ${TEXTAREA_MAX_LENGTH} caractères` }),
  name: zod
    .string()
    .min(MIN_CHAR_LENGTH, { message: MIN_CHAR_MESSAGE })
    .max(MAX_CHAR_LENGTH, { message: MAX_CHAR_MESSAGE })
});

export type ContactFormProps = zod.infer<typeof contactFormSchema>;
