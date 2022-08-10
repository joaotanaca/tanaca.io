import SectionCard, { SectionCardProps } from '@molecules/SectionCard';
import React, { PropsWithChildren, useMemo } from 'react';

type Props = {
  cards: SectionCardProps[];
  className?: string;
};

const SectionCards = ({ cards, className }: PropsWithChildren<Props>) => {
  const renderSections = useMemo(
      () => cards.map(card => <SectionCard key={card.title?.toString()} {...card} />),
      [cards],
  );
  return <div className={className}>{renderSections}</div>;
};

export default SectionCards;
