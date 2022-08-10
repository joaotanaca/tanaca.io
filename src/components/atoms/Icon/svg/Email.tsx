import React from 'react';
import { IconProps } from '..';

const Email = ({ size = 24, color = 'white' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.9467 11.76L18.6667 3.7067C17.9653 3.03984 17.0345 2.66797 16.0667 2.66797C15.0989 2.66797 14.1681 3.03984 13.4667 3.7067L5.18667 11.7067C4.81877 12.0279 4.52289 12.4231 4.31839 12.8666C4.11389 13.31 4.00539 13.7917 4 14.28V25.72C4.01405 26.6902 4.41206 27.6152 5.10682 28.2925C5.80159 28.9698 6.73647 29.3441 7.70667 29.3334H24.2933C25.2635 29.3441 26.1984 28.9698 26.8932 28.2925C27.5879 27.6152 27.9859 26.6902 28 25.72V14.28C27.999 13.8113 27.9054 13.3474 27.7246 12.915C27.5439 12.4826 27.2795 12.0901 26.9467 11.76V11.76ZM15.2533 5.6267C15.4573 5.44025 15.7237 5.33686 16 5.33686C16.2763 5.33686 16.5427 5.44025 16.7467 5.6267L24 12.6667L16.7067 19.7067C16.5027 19.8932 16.2363 19.9965 15.96 19.9965C15.6837 19.9965 15.4173 19.8932 15.2133 19.7067L8 12.6667L15.2533 5.6267ZM25.3333 25.72C25.3162 25.9817 25.1982 26.2266 25.0043 26.4031C24.8103 26.5797 24.5555 26.6742 24.2933 26.6667H7.70667C7.44451 26.6742 7.18966 26.5797 6.99571 26.4031C6.80176 26.2266 6.68381 25.9817 6.66667 25.72V15.1334L12.0667 20.3334L9.85333 22.4667C9.605 22.7165 9.46561 23.0545 9.46561 23.4067C9.46561 23.7589 9.605 24.0969 9.85333 24.3467C9.97726 24.4767 10.1262 24.5803 10.2911 24.6514C10.4561 24.7224 10.6337 24.7593 10.8133 24.76C11.1566 24.7587 11.4862 24.6249 11.7333 24.3867L14.0933 22.12C14.6795 22.4782 15.3531 22.6677 16.04 22.6677C16.7269 22.6677 17.4005 22.4782 17.9867 22.12L20.3467 24.3867C20.5938 24.6249 20.9234 24.7587 21.2667 24.76C21.4463 24.7593 21.6239 24.7224 21.7889 24.6514C21.9538 24.5803 22.1027 24.4767 22.2267 24.3467C22.475 24.0969 22.6144 23.7589 22.6144 23.4067C22.6144 23.0545 22.475 22.7165 22.2267 22.4667L20 20.3334L25.3333 15.1334V25.72Z"
        fill={color}
      />
    </svg>
  );
};

export default Email;
