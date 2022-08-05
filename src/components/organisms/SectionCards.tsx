import SectionCard, { SectionCardProps } from '@molecules/SectionCard';
import React, { PropsWithChildren, useMemo } from 'react';

type Props = {
  cards: SectionCardProps[];
};

const SectionCards = ({ cards }: PropsWithChildren<Props>) => {
  const renderSections = useMemo(
      () => cards.map(card => <SectionCard key={card.title} {...card} />),
      [cards],
  );
  return <>{renderSections}</>;
};

export default SectionCards;
