import type { FC } from 'react';

export type ShortcutsItemProps = {
  label: string;
  url: string;
};

const ShortcutsItem: FC<ShortcutsItemProps> = ({ label, url }) => (
  <li role='none'>
    <a className='hover:underline' href={url} role='menuitem'>
      {label}
    </a>
  </li>
);

export default ShortcutsItem;
