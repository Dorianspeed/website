import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyResume from './MyResume';

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
  });

  it('should download PDF on button click', async () => {
    render(<MyResume />);

    await userEvent.click(screen.getByRole('button', { name: 'Téléchargez-moi' }));

    //TODO do something
  });
});
