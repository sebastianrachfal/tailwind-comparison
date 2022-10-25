import { ChevronDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC, memo } from 'react';

import Base from './_Base';

type Props = ComponentPropsWithoutRef<typeof Base> & {
  isCollapsible?: boolean;
  isAccented?: boolean;
};

const _Search: FC<Props> = props => {
  const { isCollapsible, isAccented, ...rest } = props;

  return (
    <Base
      {...rest}
      className={clsx(
        'bg-white/10 border-white/30 text-neutral-100 border flex-row py-2 px-4 rounded-[32px] h-[34px] leading-4 items-center',
        {
          'border-none h-[46px] px-6 py-3 text-sm bg-green-100 text-green-700':
            isAccented,
        },
        rest.className,
      )}
    >
      {rest.children}

      {isCollapsible && (
        <ChevronDownIcon className="inline w-[18px] h-[18px] ml-2.5" />
      )}
    </Base>
  );
};

export default memo(_Search);
