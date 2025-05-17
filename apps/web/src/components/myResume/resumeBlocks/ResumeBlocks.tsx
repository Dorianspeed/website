import type { ResumeSections } from '@/types/globals';

import { RESUME_DATA } from '@/constants/data';
import { RESUME_SECTION_LABELS } from '@/constants/globals';

import Block from '@/components/common/block/Block';
import Tags from '@/components/common/tags/Tags';

const ResumeBlocks = () => (
  <section className='flex flex-col gap-32 p-6 md:p-16'>
    {Object.entries(RESUME_DATA)
      .sort(([_, itemA], [__, itemB]) => itemA.position - itemB.position)
      .map(([section, { data }]) => (
        <div className='flex flex-col gap-12' id={section} key={section}>
          <h2 className='text-2xl font-semibold'>
            {RESUME_SECTION_LABELS[section as ResumeSections]}
          </h2>
          {data.map(({ assetsList, picture, ...otherData }) => (
            <Block
              key={otherData.id}
              picture={{ ...picture, height: 160, width: 160 }}
              {...otherData}
            >
              {Boolean(assetsList.length) && <Tags tags={assetsList} />}
            </Block>
          ))}
        </div>
      ))}
  </section>
);

export default ResumeBlocks;
