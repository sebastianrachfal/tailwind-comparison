import clsx from 'clsx';
import Image from 'next/image';
import { useMemo } from 'react';

import Button from '@/components/atoms/Button';

const NAV_BUTTONS = [
  { title: 'About Us' },
  { title: 'Article' },
  { title: 'Property', collapsible: true },
  { title: 'Sign Up!', accent: true },
];

export default function MenuSide() {
  const menuContent = useMemo(
    () =>
      NAV_BUTTONS.map(({ title, collapsible, accent }, index, arr) => (
        <Button.Navigation
          key={`nav-button-${index}`}
          isCollapsible={collapsible}
          isAccented={accent}
          className={clsx({ '!ml-14': index === arr.length - 1 })}
        >
          {title}
        </Button.Navigation>
      )),
    [],
  );

  return (
    <div className="w-1/2 h-[720px] overflow-hidden flex justify-end relative">
      <Image
        src="/background/house.png"
        height={720}
        width={720}
        alt="Menu Background"
        className="z-[-1]"
      />

      <div className="absolute top-0 left-0 w-full h-full pt-10">
        <div className="bg-red-400 pr-[120px] flex flex-row justify-end items-center space-x-6">
          {menuContent}
        </div>
      </div>
    </div>
  );
}
