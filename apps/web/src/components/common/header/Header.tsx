'use client';

import { useState } from 'react';

import { MENU_ITEMS_DATA } from '@/constants/globals';

import BurgerIcon from '@/assets/burger.svg';
import CrossIcon from '@/assets/cross.svg';
import LaptopIcon from '@/assets/laptop.svg';

import MenuItem from './menuItem/MenuItem';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const orderedMenuItemsData = [...MENU_ITEMS_DATA].sort((a, b) => a.position - b.position);

  return (
    <header className='border-default-border bg-default-bg-default fixed top-0 w-full justify-between border-b p-6 md:relative md:flex md:flex-row md:items-center md:px-8 md:py-9'>
      <div className='size-10'>
        <LaptopIcon aria-hidden={true} data-testid='smile-icon' />
      </div>
      <nav aria-label='Main menu' role='navigation'>
        <button
          aria-controls='menu'
          aria-expanded={isMenuOpen}
          className='absolute top-6.5 right-6 cursor-pointer md:top-9.5 md:right-8 md:hidden'
          onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
          type='button'
        >
          <span className='sr-only'>Menu</span>
          <div className='size-9'>
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
