import Tag from './tag/Tag';

export type TagsProps = {
  tags: Array<string>;
};

const Tags = ({ tags }: TagsProps) => (
  <div className='flex flex-wrap gap-4'>
    {tags.map((tag, index) => (
      <Tag appearance='primary' key={index} tag={tag} />
    ))}
  </div>
);

export default Tags;
