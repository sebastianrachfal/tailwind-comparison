import { MapPinIcon } from '@heroicons/react/24/solid';
import { FC, memo } from 'react';

import Button from '@/components/atoms/Button';

const SearchInput: FC = () => {
  return (
    <div className="p-1 border border-neutral-300 rounded-[32px] relative overflow-hidden flex flex-row">
      <div className="absolute top-0 left-0 flex flex-row items-center h-full ml-6">
        <MapPinIcon className="absolute w-6 h-6 text-yellow-500" />
      </div>

      <input
        placeholder="Search for the location you want!"
        className="pl-16 py-3 outline-none font-primary text-sm leading-[22px] font-medium flex-1 mr-4"
      />

      <Button.Search className="ml-auto" />
    </div>
  );
};

export default memo(SearchInput);
