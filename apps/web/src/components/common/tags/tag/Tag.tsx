type TagAppearance = 'primary';

export type TagProps = {
  appearance: TagAppearance;
  tag: string;
};

const TAG_COLORS = {
  primary: 'bg-brand-bg-default text-brand-text-onbrand'
} satisfies Record<TagAppearance, string>;

const Tag = ({ appearance, tag }: TagProps) => (
  <span className={`rounded-lg p-2 ${TAG_COLORS[appearance]}`}>{tag}</span>
);

export default Tag;
