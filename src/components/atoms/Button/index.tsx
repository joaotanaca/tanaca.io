/* eslint-disable indent */
import React, { PropsWithChildren, useMemo } from 'react';
import variants from './variants';

type Props = {
  variant?: keyof typeof variants;
  rounded?: keyof typeof radius;
  type?: 'outline' | 'soft' | 'minimal' | 'default';
};

const uniqueStyles = ['outline', 'soft', 'minimal'];

const radius = { full: 'rounded-[2.25rem]', medium: 'rounded-md' };

const Button = ({
  children,
  variant = 'green',
  rounded = 'medium',
  type = 'default',
}: PropsWithChildren<Props>) => {
  const { background, hover, focus, disabled } = useMemo(
    () => variants[variant],
    [variant],
  );

  const styles = useMemo(() => {
    const uniqueStyle = uniqueStyles.some(value => value === type);
    if (uniqueStyle) {
      return (variants as any)[variant][type];
    } else {
      return `${background} ${hover} ${focus} ${disabled}`;
    }
  }, [variant, type]);
  return (
    <button
      className={`px-4 py-2 text-sm drop-shadow ${radius[rounded]} ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
