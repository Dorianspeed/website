import type { RefObject } from 'react';

import { SHORTCUTS_ITEMS_DATA } from '@/constants/globals';

import ShortcutsItem from './shortcutsItem/ShortcutsItem';

export type ShortcutsProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

const Shortcuts = ({ sectionRef }: ShortcutsProps) => {
  const sortedShortcutsItem = [...SHORTCUTS_ITEMS_DATA].sort((a, b) => a.position - b.position);

  return (
    <section className='flex flex-col gap-2 p-6 md:p-16' ref={sectionRef}>
      <h2 className='text-2xl font-semibold'># Raccourcis</h2>
      <nav aria-label='Raccourcis du CV'>
        <ol
          aria-label='Raccourcis du CV'
          className='text-default-text-secondary flex list-inside list-decimal flex-col gap-2 text-xl font-normal'
          role='menubar'
        >
          {sortedShortcutsItem.map((data) => (
            <ShortcutsItem key={data.position} {...data} />
          ))}
        </ol>
      </nav>
    </section>
  );
};

export default Shortcuts;
