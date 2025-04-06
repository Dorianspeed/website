import Image from 'next/image';
import type { FC } from 'react';

import ExternalLinkIcon from '@/assets/external-link.svg';

export type ProjectBlockProps = {
  description: string;
  featuresList: Array<string>;
  pictureUrl: string;
  projectName: string;
  projectUrl: string;
};

const ProjectBlock: FC<ProjectBlockProps> = ({
  description,
  featuresList,
  pictureUrl,
  projectName,
  projectUrl
}) => (
  <div className='border-default-border flex flex-col gap-6 rounded-lg border p-6 lg:flex-row'>
    <Image
      alt='Project picture'
      className='max-h-40 self-center object-cover lg:self-stretch'
      height={160}
      loading='lazy'
      src={pictureUrl}
      width={160}
    />
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>{projectName}</h2>
        <h3 className='text-default-text-secondary text-xl font-normal'>{description}</h3>
        <ul className='text-default-text-tertiary list-inside list-disc text-base font-normal'>
          {featuresList.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <a
        className='btn btn-primary shrink-0'
        href={projectUrl}
        rel='noopener noreferrer'
        target='_blank'
      >
        <div className='size-4'>
          <ExternalLinkIcon aria-hidden={true} />
        </div>
        Voir le projet sur GitHub
      </a>
    </div>
  </div>
);

export default ProjectBlock;
