import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavItemDataProps } from '@/types/globals';

export type MenuItemProps = NavItemDataProps & {
  onNavigate: LinkProps['onNavigate'];
};

const MenuItem = ({ label, onNavigate, url }: MenuItemProps) => {
  const currentPage = usePathname();

  const isCurrentPage = currentPage === url;

  return (
    <li role='none'>
      <Link
        {...(isCurrentPage && { 'aria-current': 'page' })}
        className={`hover:bg-brand-bg-tertiary inline-block w-full rounded-lg py-2 text-center text-base font-normal duration-300 md:inline md:p-2 md:text-left ${isCurrentPage ? 'bg-brand-bg-tertiary' : ''}`}
        href={url}
        onClick={onNavigate}
        role='menuitem'
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
