import React, { PropsWithChildren } from 'react';

type Props = {
  type?: keyof typeof colors.primary;
  bg?: keyof typeof colors;
  className?: string;
};

const colors = {
  primary: {
    default: 'text-white bg-green-500',
    soft: 'bg-green-100 text-green-500',
  },
  secondary: {
    default: 'bg-purple-500',
    soft: 'bg-purple-100 text-purple-500',
  },
  danger: {
    default: 'bg-red-500',
    soft: 'bg-red-100 text-red-500',
  },
  warning: {
    default: 'bg-orange-500',
    soft: 'bg-orange-100 text-orange-500',
  },
  info: {
    default: 'bg-blue-500',
    soft: 'bg-blue-100 text-blue-500',
  },
  light: {
    default: 'bg-gray-200 text-gray-700',
    soft: '',
  },
  dark: {
    default: 'bg-gray-900 text-green-50',
    soft: '',
  },
};

const Badge = ({
  children,
  bg = 'primary',
  type = 'default',
  className = '',
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`px-2 py-0.5 rounded-4xl ${
        colors[bg][type] || colors[bg].default
      } w-fit text-sm leading-[1.125rem] ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
