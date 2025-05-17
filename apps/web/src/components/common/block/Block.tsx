import Image from 'next/image';
import type { PropsWithChildren } from 'react';

import type { DefaultBlockProps, PicturePropsExtended } from '@/types/globals';

export type BlockProps = Omit<DefaultBlockProps, 'picture'> & {
  picture: PicturePropsExtended;
};

const Block = ({
  blockList,
  children,
  picture,
  subtitle,
  title
}: PropsWithChildren<BlockProps>) => {
  const { alt: pictureAlt, height: pictureHeight, url: pictureUrl, width: pictureWidth } = picture;
  const { content: subtitleContent, element: Subtitle } = subtitle;
  const { content: titleContent, element: Title } = title;

  return (
    <div className='border-default-border @container rounded-lg border'>
      <div className='flex flex-col gap-6 p-6 @xl:flex-row'>
        <Image
          alt={pictureAlt}
          className='h-fit shrink-0 object-cover'
          height={pictureHeight}
          loading='lazy'
          src={pictureUrl}
          width={pictureWidth}
        />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <Title className='text-2xl font-semibold'>{titleContent}</Title>
            <Subtitle className='text-default-text-secondary text-xl font-normal'>
              {subtitleContent}
            </Subtitle>
            {Boolean(blockList.length) && (
              <ul
                className='text-default-text-tertiary list-inside list-disc text-base font-normal'
                role='list'
              >
                {blockList.map(({ indexKey, item }) => (
                  <li key={indexKey} role='listitem'>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Block;
