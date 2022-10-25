import { ChevronRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC, memo } from 'react';

import Base from './_Base';

type Props = ComponentPropsWithoutRef<typeof Base>;

const _Search: FC<Props> = props => {
  return (
    <Base
      className={clsx(
        'bg-green-500 text-white flex-row py-3 pl-4 pr-12 rounded-[32px] leading-[22px] h-12 items-center',
        props.className,
      )}
    >
      {'Search'}

      <ChevronRightIcon className="absolute w-5 h-6 ml-2 right-5 top-4" />
    </Base>
  );
};

export default memo(_Search);
