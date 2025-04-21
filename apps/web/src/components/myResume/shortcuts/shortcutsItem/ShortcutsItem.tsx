export type ShortcutsItemProps = {
  label: string;
  url: string;
};

const ShortcutsItem = ({ label, url }: ShortcutsItemProps) => (
  <li role='none'>
    <a className='hover:underline' href={url} role='menuitem'>
      {label}
    </a>
  </li>
);

export default ShortcutsItem;
