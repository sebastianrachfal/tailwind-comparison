import { BeakerIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import Button from '@/components/atoms/Button';
import SearchInput from '@/components/molecules/SearchInput';
import { COLORS } from '@/constants';

import BlurredBlob from './assets/blur.svg';

export default function Hero() {
  return (
    <div className="flex-row w-1/2 py-11 pl-[120px] pr-[104px]">
      <BlurredBlob className="absolute top-0 left-0 z-[-1]" />

      <div className="flex-row">
        <BeakerIcon className="items-center inline text-yellow-500 h-9 w-9" />

        <h1 className="inline ml-3 text-base font-bold text-headline">
          {'Tailwind'}
        </h1>
      </div>

      <h2
        className="font-bold text-headline text-[40px] mt-24 capitalize"
        style={{ WebkitTextStroke: `1px ${COLORS.headline}` }}
      >
        {'find the place to'}
        <br />
        {'live '}

        <span className="text-transparent">{'your dreams'}</span>

        <br />
        {'easily here'}
      </h2>

      <p className="pt-6 font-normal leading-7 text-neutral-600/75">
        {
          'Everything you need about finding \
           your place to live will be here, \
           where it will be easier for you'
        }
      </p>

      <div className="py-8">
        <SearchInput />
      </div>

      <span className="capitalize text-neutral-500">{'our partnership'}</span>

      <div className="flex-row h-16 space-x-8">
        {new Array(4).fill(null).map((_, index) => (
          <div className="inline">
            <Image
              src={`/logos/${index}.png`}
              height={64}
              width={83}
              alt="Company Logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
