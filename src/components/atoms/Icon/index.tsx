import React, { useMemo } from 'react';
import svg from './svg';

const Icon: React.FC<{ icon: keyof typeof svg }> = ({ icon }) => {
  const IconSelect = useMemo(() => svg[icon], []);
  return <IconSelect />;
};

export default Icon;
