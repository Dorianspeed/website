import QuoteBlock, { type QuoteBlockProps } from './QuoteBlock';
import { render, screen } from '@testing-library/react';

const quoteBlockProps: QuoteBlockProps = {
  author: 'Dorian',
  authorJob: 'Dev',
  avatarUrl: '/image.png',
  quote: 'Unbelievable !'
};

describe('QuoteBlock', () => {
  it('should render component', () => {
    render(<QuoteBlock {...quoteBlockProps} />);

    expect(screen.getByRole('blockquote')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Author’s picture' })).toBeInTheDocument();
    expect(screen.getAllByRole('paragraph')).toHaveLength(2);
  });
});
