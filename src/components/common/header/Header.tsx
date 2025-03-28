'use client';

import MenuItem from './menuItem/MenuItem';
import { useState } from 'react';

import { MENU_ITEMS_DATA } from '@/constants/globals';

import BurgerIcon from '@/assets/burger.svg';
import CrossIcon from '@/assets/cross.svg';
import LaptopIcon from '@/assets/laptop.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const orderedMenuItemsData = [...MENU_ITEMS_DATA].sort((a, b) => a.position - b.position);

  return (
    <header className='border-primary-border relative justify-between border-b px-8 py-9 md:flex md:flex-row md:items-center'>
      <div className='h-10 w-10'>
        <LaptopIcon aria-hidden={true} data-testid='smile-icon' />
      </div>
      <nav aria-label='Main menu' role='navigation'>
        <button
          aria-controls='menu'
          aria-expanded={isMenuOpen}
          className='absolute top-9.5 right-8 cursor-pointer md:hidden'
          onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
          type='button'
        >
          <span className='sr-only'>Menu</span>
          <div className='h-9 w-9'>
            {isMenuOpen ? (
              <CrossIcon aria-hidden={true} data-testid='cross-icon' />
            ) : (
              <BurgerIcon aria-hidden={true} data-testid='burger-icon' />
            )}
          </div>
        </button>
        <ul
          aria-label='Main menu'
          className={`${isMenuOpen ? 'mt-16 flex flex-col' : 'hidden'} gap-2 md:flex md:flex-row md:items-center`}
          role='menubar'
        >
          {orderedMenuItemsData.map((data) => (
            <MenuItem key={data.url} {...data} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
