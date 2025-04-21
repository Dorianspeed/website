import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavItemDataProps } from '@/types/globals';

const SiteMapItem = ({ label, url }: NavItemDataProps) => {
  const currentPage = usePathname();

  const isCurrentPage = currentPage === url;

  return (
    <li role='none'>
      <Link
        {...(isCurrentPage && { 'aria-current': 'page' })}
        className='text-base font-normal hover:underline'
        href={url}
        role='menuitem'
      >
        {label}
      </Link>
    </li>
  );
};

export default SiteMapItem;
