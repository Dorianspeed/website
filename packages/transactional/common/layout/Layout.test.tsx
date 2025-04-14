import Layout, { type LayoutProps } from './Layout';
import { render, screen } from '@testing-library/react';

const defaultProps = { metaTitle: 'I am a meta title' } satisfies LayoutProps;

describe('Layout', () => {
  it('should render component', () => {
    render(<Layout {...defaultProps} />);

    expect(screen.queryByTestId('I am a child')).not.toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(4);
    expect(screen.getAllByRole('link')).toHaveLength(5);
    expect(screen.getByText('Dorian Garcia EI')).toBeInTheDocument();
    expect(screen.getByText('11 Impasse du Bois Midy, 27400 La Haye-Malherbe')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <Layout {...defaultProps}>
        <div data-testid='I am a children' />
      </Layout>
    );

    expect(screen.getByTestId('I am a children')).toBeInTheDocument();
  });
});
