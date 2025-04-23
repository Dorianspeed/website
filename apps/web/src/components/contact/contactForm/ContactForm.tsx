import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { CONTACT_FORM_DEFAULT_VALUES, CONTACT_FORM_LABELS } from '@/constants/form';

import { fetcher } from '@/utils/http';
import { toastError } from '@/utils/toast';

import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import SvgIcon from '@/components/common/svgIcon/SvgIcon';
import Textarea from '@/components/common/textarea/Textarea';

import SendIcon from '@/assets/send.svg';

import { type ContactFormProps, contactFormSchema } from './ContactForm.schema';

const ContactForm = () => {
  const { push } = useRouter();

  const {
    control,
    formState: { isValid, isSubmitting },
    handleSubmit
  } = useForm({
    defaultValues: CONTACT_FORM_DEFAULT_VALUES,
    mode: 'onChange',
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = handleSubmit(async ({ companyName, email, message, name }) => {
    try {
      const trimmedFormValues = {
        companyName,
        email: email.trim(),
        message: message.trim(),
        name: name.trim()
      } satisfies ContactFormProps;

      await fetcher<{ message: string }>('/api/contact', {
        body: JSON.stringify(trimmedFormValues),
        method: 'POST'
      });

      push('/contact/confirmation');
    } catch {
      toastError(
        'Une erreur est survenue lors de la soumission du formulaire de contact. Merci de réessayer dans quelques instants !'
      );
    }
  });

  return (
    <form
      className='bg-default-bg-default border-default-border flex w-64 flex-col gap-2 rounded-lg border p-6 min-[375px]:w-72 min-[425px]:w-80 md:w-96'
      onSubmit={onSubmit}
    >
      <Input<ContactFormProps>
        autoComplete='family-name'
        control={control}
        labels={CONTACT_FORM_LABELS}
        name='name'
      />
      <Input<ContactFormProps>
        autoComplete={undefined}
        control={control}
        labels={CONTACT_FORM_LABELS}
        name='companyName'
      />
      <Input<ContactFormProps>
        autoComplete='email'
        control={control}
        labels={CONTACT_FORM_LABELS}
        name='email'
      />
      <Textarea<ContactFormProps> control={control} labels={CONTACT_FORM_LABELS} name='message' />
      <Button
        appearance='primary'
        className='w-full justify-center self-center'
        disabled={!isValid || isSubmitting}
        icon={
          isSubmitting ? (
            <div className='border-default-text-tertiary size-4 shrink-0 animate-spin rounded-full border-t border-r' />
          ) : (
            <SvgIcon dataTest={undefined} icon={SendIcon} size={4} />
          )
        }
        type='submit'
      >
        Soumettre
      </Button>
    </form>
  );
};

export default ContactForm;
