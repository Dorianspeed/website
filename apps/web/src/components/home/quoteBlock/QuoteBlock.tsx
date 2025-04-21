import Image from 'next/image';

export type QuoteBlockProps = {
  author: string;
  authorJob: string;
  avatarUrl: string;
  quote: string;
};

const QuoteBlock = ({ author, authorJob, avatarUrl, quote }: QuoteBlockProps) => (
  <div className='border-default-border flex flex-col justify-between gap-6 rounded-lg border p-6'>
    <blockquote className="text-2xl font-semibold before:content-['“'] after:content-['”']">
      {quote}
    </blockquote>
    <div className='flex items-center gap-3'>
      <Image
        alt='Photo de l’auteur'
        className='rounded-full object-cover'
        height={40}
        loading='lazy'
        src={avatarUrl}
        width={40}
      />
      <div className='flex flex-col gap-0.5'>
        <p className='text-default-text-secondary text-base font-semibold'>{author}</p>
        <p className='text-default-text-tertiary text-base font-normal'>{authorJob}</p>
      </div>
    </div>
  </div>
);

export default QuoteBlock;
