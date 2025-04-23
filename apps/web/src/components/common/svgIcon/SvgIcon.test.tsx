import { render, screen } from '@testing-library/react';

import LaptopIcon from '@/assets/laptop.svg';

import type { SvgIconProps } from './SvgIcon';
import SvgIcon from './SvgIcon';

const defaultProps = {
  dataTest: undefined,
  icon: LaptopIcon,
  size: 4
} satisfies SvgIconProps;

describe('SvgIcon', () => {
  it('should render component', () => {
    render(<SvgIcon {...defaultProps} />);

    expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
  });
});
