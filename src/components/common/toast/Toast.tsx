import type { ToastContentProps } from 'react-toastify';

import CrossIcon from '@/assets/cross.svg';
import TriangleAlertIcon from '@/assets/triangle-alert.svg';

//TODO use toast type to define icons and colors
const Toast = ({ closeToast, toastProps: { ariaLabel } }: ToastContentProps) => (
  <div className='bg-red-50 p-4 text-red-500'>
    <button
      className='text-brand-text-secondary absolute top-0 right-0 cursor-pointer duration-300 hover:text-red-500'
      onClick={closeToast}
      type='button'
    >
      <span className='sr-only'>Fermer</span>
      <div className='size-8'>
        <CrossIcon aria-hidden={true} />
      </div>
    </button>
    <div className='flex items-center gap-2'>
      <div className='size-5 shrink-0'>
        <TriangleAlertIcon aria-hidden={true} />
      </div>
      <p>{ariaLabel}</p>
    </div>
  </div>
);

export default Toast;
