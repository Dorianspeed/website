import { type SVGElementType } from 'react';

const SVG_SIZES = {
  10: 'size-10',
  12: 'size-12',
  4: 'size-4',
  5: 'size-5',
  8: 'size-8',
  9: 'size-9'
} satisfies Record<number, string>;

export type SvgIconProps = {
  dataTest?: string;
  Icon: SVGElementType;
  size: keyof typeof SVG_SIZES;
};

const SvgIcon = ({ dataTest = 'svg-icon', Icon, size }: SvgIconProps) => (
  <div className={`${SVG_SIZES[size]} shrink-0`}>
    <Icon aria-hidden={true} data-testid={dataTest} />
  </div>
);

export default SvgIcon;
