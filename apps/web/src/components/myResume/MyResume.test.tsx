import * as elementPositionHook from '@/hooks/useElementPosition/useElementPosition';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyResume from './MyResume';

const scrollToTopButtonLabel = 'Retour au haut de la page';
const mockScrollIntoView = vi.fn();

describe('MyResume', () => {
  it('should render component', () => {
    render(<MyResume />);

    expect(screen.getByRole('heading', { level: 1, name: 'Mon CV' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Téléchargez-moi' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contactez-moi' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: '# Raccourcis' })).toBeInTheDocument();
    expect(
      screen.getByRole('menuitem', { name: 'Mes expériences professionnelles' })
    ).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Mes formations' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Mes certifications' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Description brève' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Mes expériences professionnelles' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Mes formations' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Mes certifications' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: scrollToTopButtonLabel })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: scrollToTopButtonLabel })).toHaveClass(
      'invisible opacity-0'
    );
  });

  it('should display scroll to top button and trigger scrollIntoView on click', async () => {
    Element.prototype.scrollIntoView = mockScrollIntoView;
    vi.spyOn(elementPositionHook, 'default').mockReturnValue(-100);

    render(<MyResume />);

    expect(screen.getByRole('button', { name: scrollToTopButtonLabel })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: scrollToTopButtonLabel })).toHaveClass(
      'visible opacity-100'
    );

    await userEvent.click(screen.getByRole('button', { name: scrollToTopButtonLabel }));

    expect(mockScrollIntoView).toHaveBeenCalledOnce();
  });

  it('should download PDF on button click', async () => {
    render(<MyResume />);

    await userEvent.click(screen.getByRole('button', { name: 'Téléchargez-moi' }));

    //TODO do something
  });
});
