import { render, screen } from '@testing-library/react';
import { randomUUID } from 'crypto';

import QuoteBlock, { type QuoteBlockProps } from './QuoteBlock';

const quoteBlockProps = {
  author: 'Dorian',
  authorJob: 'Dev',
  avatarUrl: '/image.png',
  id: randomUUID(),
  quote: 'Unbelievable !'
} satisfies QuoteBlockProps;

describe('QuoteBlock', () => {
  it('should render component', () => {
    render(<QuoteBlock {...quoteBlockProps} />);

    expect(screen.getByRole('blockquote')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Photo de l’auteur' })).toBeInTheDocument();
    expect(screen.getAllByRole('paragraph')).toHaveLength(2);
  });
});
