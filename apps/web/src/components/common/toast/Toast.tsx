import type { ToastContentProps } from 'react-toastify';

import CrossIcon from '@/assets/cross.svg';
import TriangleAlertIcon from '@/assets/triangle-alert.svg';

import SvgIcon from '../svgIcon/SvgIcon';

//TODO use toast type to define icons and colors
const Toast = ({ closeToast, toastProps: { ariaLabel } }: ToastContentProps) => (
  <div className='bg-red-50 p-4 text-red-500'>
    <button
      className='text-brand-text-secondary absolute top-1 right-1 cursor-pointer duration-300 hover:text-red-500'
      onClick={closeToast}
      type='button'
    >
      <span className='sr-only'>Fermer</span>
      <SvgIcon dataTest={undefined} icon={CrossIcon} size={5} />
    </button>
    <div className='flex items-center gap-2'>
      <SvgIcon dataTest={undefined} icon={TriangleAlertIcon} size={5} />
      <p>{ariaLabel}</p>
    </div>
  </div>
);

export default Toast;
