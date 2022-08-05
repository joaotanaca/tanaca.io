import Icon from '@atoms/Icon';
import svg from '@atoms/Icon/svg';
import React, { PropsWithChildren } from 'react';

export type SectionCardProps = {
  title?: string;
  description?: string | JSX.Element;
  icon?: keyof typeof svg;
  className?: string;
};

const SectionCard = ({
  title,
  description,
  icon = 'test',
  className,
}: PropsWithChildren<SectionCardProps>) => {
  return (
    <div className={`flex flex-col gap-4 items-center py-8 ${className}`}>
      <div className="p-5 bg-green-500 rounded-md">
        <Icon size={30} icon={icon} color="#FFF" />
      </div>
      <h3 className="font-bold text-gray-900 text-center text-2xl">{title}</h3>
      <p className="text-gray-500 text-center text-base font-medium md:col-span-10 md:col-start-2 px-8">
        {description}
      </p>
    </div>
  );
};

export default SectionCard;
