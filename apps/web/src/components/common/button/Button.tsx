import Link from 'next/link';
import {
  Fragment,
  type PropsWithChildren,
  type ReactElement,
  type SVGElementType,
  isValidElement
} from 'react';

import { INTERNAL_URLS } from '@/constants/globals';

import SvgIcon from '../svgIcon/SvgIcon';

type ButtonAppearance = 'primary' | 'secondary';

const BUTTON_STYLES = {
  primary:
    'bg-brand-bg-default border-brand-border-default text-brand-text-onbrand hover:bg-neutral-bg-tertiary-hover hover:text-brand-text-secondary disabled:bg-default-border disabled:border-default-text-tertiary disabled:text-default-text-tertiary',
  secondary:
    'bg-neutral-bg-tertiary border-neutral-border-secondary hover:bg-neutral-bg-tertiary-hover'
} satisfies Record<ButtonAppearance, string>;

export type ButtonProps = {
  appearance: ButtonAppearance;
  className: string | undefined;
  icon: ReactElement | SVGElementType;
} & (
  | { onClick: () => void; type: 'button' }
  | { href: string; type: 'link' }
  | { disabled: boolean; type: 'submit' }
);

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { appearance, children, className = '', icon, type } = props;

  const fullClassame = `flex w-fit cursor-pointer items-center gap-2 rounded-lg border p-3 text-base font-normal duration-300 ${BUTTON_STYLES[appearance]} ${className}`;
  const fullChildren = (
    <Fragment>
      {isValidElement(icon) ? icon : <SvgIcon dataTest={undefined} icon={icon} size={4} />}
      {children}
    </Fragment>
  );

  if (type === 'button') {
    const { onClick } = props;

    return (
      <button className={fullClassame} onClick={onClick} type='button'>
        {fullChildren}
      </button>
    );
  }

  if (type === 'link') {
    const { href } = props;
    const isInternal = Object.values(INTERNAL_URLS).includes(href);
    const ButtonLink = isInternal ? Link : 'a';

    return (
      <ButtonLink
        className={fullClassame}
        href={href}
        {...(!isInternal && { rel: 'noopener noreferrer', target: '_blank' })}
      >
        {fullChildren}
      </ButtonLink>
    );
  }

  if (type === 'submit') {
    const { disabled } = props;

    return (
      <button className={fullClassame} disabled={disabled} type='submit'>
        {fullChildren}
      </button>
    );
  }
};

export default Button;
