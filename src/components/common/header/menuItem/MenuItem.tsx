import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { UrlDataProps } from '@/types/globals';

const MenuItem: FC<UrlDataProps> = ({ label, url }) => {
  const currentPage = usePathname();

  const isCurrentPage = currentPage === url;

  return (
    <li role='none'>
      <Link
        {...(isCurrentPage && { 'aria-current': 'page' })}
        className={`hover:bg-secondary-background inline-block w-full rounded-lg py-2 text-center duration-300 md:inline md:p-2 md:text-left ${isCurrentPage ? 'bg-secondary-background' : ''}`}
        href={url}
        role='menuitem'
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
