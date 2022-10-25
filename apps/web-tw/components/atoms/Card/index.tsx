import { FC, HTMLProps, memo } from 'react';

type Props = {
  title: string;
  subtitle: string;
  children?: HTMLProps<HTMLDivElement>['children'];
};

const Card: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div className="bg-white rounded-[32px] p-6 flex shrink-0">
      {children && (
        <div className="h-[56px] min-w-[56px] w-fit mr-4">{children}</div>
      )}

      <div className="flex flex-col justify-center">
        <span className="leading-6 text-headline whitespace-nowrap">
          {title}
        </span>

        <span className="text-xs leading-5 text-subheadline whitespace-nowrap">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default memo(Card);
