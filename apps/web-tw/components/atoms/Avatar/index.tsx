import Image from 'next/image';
import { FC, memo } from 'react';

type Props = { src: string };

const Avatar: FC<Props> = ({ src }) => {
  return (
    <div className="h-14 w-14 p-[3px] bg-white shadow-avatar rounded-full overflow-hidden z-10">
      <Image src={src} width={53} height={53} alt="User avatar" />
    </div>
  );
};

export default memo(Avatar);
