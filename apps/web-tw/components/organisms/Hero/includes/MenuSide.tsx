import clsx from 'clsx';
import Image from 'next/image';
import { useMemo } from 'react';

import Avatar from '@/components/atoms/Avatar';
import Button from '@/components/atoms/Button';
import Card from '@/components/atoms/Card';

const NAV_BUTTONS = [
  { title: 'About Us' },
  { title: 'Article' },
  { title: 'Property', collapsible: true },
  { title: 'Sign Up!', accent: true },
];

const CARD_CONTENT = [
  {
    title: '1K+ People',
    subtitle: 'Successfully Getting Home',
    content: (
      <div className="flex space-x-[-28px]">
        <Avatar src="/avatars/0.png" />
        <Avatar src="/avatars/1.png" />
        <Avatar src="/avatars/2.png" />
      </div>
    ),
  },
  {
    title: '56 Houses',
    subtitle: 'Sold Monthly',
    content: (
      <Image
        src="/misc/house_0.png"
        width={56}
        height={56}
        className="rounded-3xl"
        alt="House photo"
      />
    ),
  },
  {
    title: '4K+',
    subtitle: 'People Looking for New Homes',
    content: <Avatar src="/avatars/3.png" />,
  },
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

  const cardContent = useMemo(
    () =>
      CARD_CONTENT.map(({ title, subtitle, content }, index, arr) => (
        <Card {...{ title, subtitle }}>{content}</Card>
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

      <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full pt-10">
        <div className="bg-red-400 pr-[120px] flex flex-row justify-end items-center space-x-6">
          {menuContent}
        </div>

        <div className="flex justify-start ml-12 mb-[38px] space-x-4">
          {cardContent}
        </div>
      </div>
    </div>
  );
}
