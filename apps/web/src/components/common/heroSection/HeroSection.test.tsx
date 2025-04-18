import { render, screen } from '@testing-library/react';

import HeroSection, { type HeroSectionProps } from './HeroSection';

const heroSectionProps = {
  subtitle: 'Subtitle',
  title: 'Title'
} satisfies HeroSectionProps;

describe('HeroSection', () => {
  it('should render full component', () => {
    render(<HeroSection {...heroSectionProps}>Hero Section</HeroSection>);

    expect(screen.getByRole('heading', { level: 1, name: 'Title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Subtitle' })).toBeInTheDocument();
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });

  it('should only render title', () => {
    render(<HeroSection {...heroSectionProps} subtitle={undefined} />);

    expect(screen.getByRole('heading', { level: 1, name: 'Title' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
    expect(screen.queryByTestId('children')).not.toBeInTheDocument();
  });

  it('should only render subtitle', () => {
    render(<HeroSection {...heroSectionProps} title={undefined} />);

    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Subtitle' })).toBeInTheDocument();
    expect(screen.queryByTestId('children')).not.toBeInTheDocument();
  });

  it('should only render children', () => {
    render(
      <HeroSection subtitle={undefined} title={undefined}>
        Hero Section
      </HeroSection>
    );

    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });

  it('should render nothing when data is not provided', () => {
    const { container } = render(<HeroSection subtitle={undefined} title={undefined} />);

    expect(container).toBeEmptyDOMElement();
  });
});
