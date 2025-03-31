import Image from 'next/image';
import type { FC } from 'react';

import ExternalLinkIcon from '@/assets/external-link.svg';

export type MissionBlockProps = {
  companyName: string;
  companyUrl: string;
  dateRange: string;
  missionsList: Array<string>;
  pictureUrl: string;
};

const MissionBlock: FC<MissionBlockProps> = ({
  companyName,
  companyUrl,
  dateRange,
  missionsList,
  pictureUrl
}) => (
  <div className='border-default-border flex flex-col gap-6 rounded-lg border p-6'>
    <Image
      alt={`Logo ${companyName}`}
      className='object-cover'
      height={120}
      loading='lazy'
      src={pictureUrl}
      width={120}
    />
    <div className='flex flex-col gap-2'>
      <h2 className='text-2xl font-semibold'>{companyName}</h2>
      <h3 className='text-default-text-secondary text-xl font-normal'>{dateRange}</h3>
      <ul className='text-default-text-tertiary list-inside list-disc text-base font-normal'>
        {missionsList.map((mission, index) => (
          <li key={index}>{mission}</li>
        ))}
      </ul>
    </div>
    <a className='btn btn-primary' href={companyUrl} rel='noopener noreferrer' target='_blank'>
      <div className='h-4 w-4'>
        <ExternalLinkIcon aria-hidden={true} />
      </div>
      Voir le site
    </a>
  </div>
);

export default MissionBlock;
