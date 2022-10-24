import { ChevronRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC, memo } from 'react';

import _Base from './_Base';

type Props = ComponentPropsWithoutRef<typeof _Base>;

const _Search: FC<Props> = props => {
  return (
    <_Base
      className={clsx(
        'bg-green-500 text-white flex-row py-3 pl-4 pr-5 rounded-[32px] leading-[22px] h-12 items-center',
        props.className,
      )}
    >
      {'Search'}

      <ChevronRightIcon className="inline w-5 h-6 ml-2" />
    </_Base>
  );
};

export default memo(_Search);
