import clsx from 'clsx';
import { FC, ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';

const _Base: FC<HTMLAttributes<HTMLButtonElement>> = forwardRef(
  function _BaseButton(props, ref: ForwardedRef<HTMLButtonElement>) {
    return (
      <button
        ref={ref}
        {...props}
        className={clsx('font-primary font-semibold text-sm', props.className)}
      />
    );
  },
);

export default memo(_Base);
