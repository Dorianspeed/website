import HeroSection, { type HeroSectionProps } from './HeroSection';
import { render, screen } from '@testing-library/react';

const defaultProps = {
  subtitle: 'I am a subtitle',
  title: 'I am a title'
} satisfies HeroSectionProps;

describe('HeroSection', () => {
  it('should render component', () => {
    render(<HeroSection {...defaultProps} />);

    expect(screen.getByRole('heading', { level: 1, name: 'I am a title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'I am a subtitle' })).toBeInTheDocument();
  });
});
