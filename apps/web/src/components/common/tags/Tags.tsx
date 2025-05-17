import type { ListItemProps } from '@/types/globals';

import Tag from './tag/Tag';

export type TagsProps = {
  tags: Array<ListItemProps>;
};

const Tags = ({ tags }: TagsProps) => (
  <div className='flex flex-wrap gap-4'>
    {tags.map(({ id, item }) => (
      <Tag appearance='primary' key={id} tag={item} />
    ))}
  </div>
);

export default Tags;
