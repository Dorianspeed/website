import { type ToastOptions, toast } from 'react-toastify';

import Toast from '@/components/common/toast/Toast';

const defaultOptions = {
  autoClose: false,
  className: 'border border-default-border w-full md:!w-96 !p-0 !rounded-lg overflow-hidden',
  closeButton: false,
  icon: false,
  position: 'bottom-right'
} satisfies ToastOptions;

export const toastError = (message: string) =>
  toast(Toast, { ...defaultOptions, ariaLabel: message, type: 'error' });
