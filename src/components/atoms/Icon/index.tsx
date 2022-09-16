import React, { memo, useMemo } from 'react';
import svg from './svg';

export type IconName = keyof typeof svg;
export type IconProps = { size?: number; className?: string; color?: string };

const Icon: React.FC<{ icon: IconName } & IconProps> = ({ icon, ...props }) => {
  const IconSelect = useMemo(() => svg[icon], []);
  return <IconSelect {...props} />;
};

export default memo(Icon);
