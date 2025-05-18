'use client';

import useOnClickOutside from '@/hooks/useOnClickOutside/useOnClickOutside';
import { useRef, useState } from 'react';

import { MENU_ITEMS_DATA } from '@/constants/globals';

import BurgerIcon from '@/assets/burger.svg';
import CrossIcon from '@/assets/cross.svg';
import LaptopIcon from '@/assets/laptop.svg';

import SvgIcon from '../svgIcon/SvgIcon';
import MenuItem from './menuItem/MenuItem';

const MOBILE_SVG_SIZE = 9;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMenu = () => setIsMenuOpen(false);

  useOnClickOutside(headerRef, closeMenu);

  const orderedMenuItemsData = [...MENU_ITEMS_DATA].sort((a, b) => a.position - b.position);

  return (
    <header
      className='border-default-border bg-default-bg-default fixed top-0 w-full justify-between border-b p-6 md:relative md:flex md:flex-row md:items-center md:px-8 md:py-9'
      ref={headerRef}
    >
      <SvgIcon dataTest='laptop-icon' icon={LaptopIcon} size={10} />
      <nav aria-label='Menu principal' role='navigation'>
        <button
          aria-controls='menu'
          aria-expanded={isMenuOpen}
          className='absolute top-6.5 right-6 cursor-pointer md:top-9.5 md:right-8 md:hidden'
          onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
          type='button'
        >
          <span className='sr-only'>Menu</span>
          {isMenuOpen ? (
            <SvgIcon dataTest='cross-icon' icon={CrossIcon} size={MOBILE_SVG_SIZE} />
          ) : (
            <SvgIcon dataTest='burger-icon' icon={BurgerIcon} size={MOBILE_SVG_SIZE} />
          )}
        </button>
        <ul
          aria-label='Menu principal'
          className={`${isMenuOpen ? 'mt-16 flex flex-col' : 'hidden'} gap-2 md:flex md:flex-row md:items-center`}
          role='menubar'
        >
          {orderedMenuItemsData.map((data) => (
            <MenuItem key={data.url} onNavigate={closeMenu} {...data} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
