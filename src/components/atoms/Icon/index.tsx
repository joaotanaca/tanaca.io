import React, { useMemo } from 'react';
import svg from './svg';

export type IconProps = { size?: number; className?: string };

const Icon: React.FC<{ icon: keyof typeof svg } & IconProps> = ({
  icon,
  ...props
}) => {
  const IconSelect = useMemo(() => svg[icon], []);
  return <IconSelect {...props} />;
};

export default Icon;
