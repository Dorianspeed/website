import SiteMapList, { type SiteMapListProps } from './SiteMapList';
import { render, screen } from '@testing-library/react';

const siteMapListProps = {
  navListName: 'legal'
} satisfies SiteMapListProps;

describe('SiteMapList', () => {
  it('should render component', () => {
    render(<SiteMapList {...siteMapListProps} />);

    expect(screen.getByRole('menubar', { name: 'Légal' })).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <SiteMapList {...siteMapListProps}>
        <div data-testid='children' />
      </SiteMapList>
    );

    expect(screen.getByRole('menubar', { name: 'Légal' })).toBeInTheDocument();
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });
});
