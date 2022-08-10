import React from 'react';
import { IconProps } from '..';

const Tel = ({ size = 24, color = 'white' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.88 17.3334C25.5867 17.3334 25.28 17.2401 24.9867 17.1734C24.3931 17.0407 23.8095 16.8669 23.24 16.6534C22.6215 16.4284 21.9415 16.4401 21.3311 16.6862C20.7206 16.9324 20.2228 17.3956 19.9334 17.9867L19.64 18.6001C18.3451 17.8657 17.1489 16.9696 16.08 15.9334C15.0438 14.8646 14.1477 13.6683 13.4134 12.3734L14.0267 12.0934C14.6178 11.804 15.0811 11.3061 15.3272 10.6957C15.5734 10.0852 15.585 9.4053 15.36 8.78675C15.1483 8.21212 14.9746 7.62419 14.84 7.02675C14.7733 6.73341 14.72 6.42675 14.68 6.13341C14.5181 5.19424 14.0262 4.34374 13.2928 3.73507C12.5595 3.1264 11.6329 2.79956 10.68 2.81341H6.66668C6.10301 2.81268 5.54555 2.93108 5.03084 3.16086C4.51613 3.39064 4.0558 3.72661 3.68002 4.14675C3.29644 4.57829 3.01084 5.08775 2.84282 5.64013C2.67481 6.19251 2.62836 6.77472 2.70668 7.34675C3.43147 12.8963 5.96696 18.0516 9.92002 22.0134C13.8818 25.9665 19.0372 28.502 24.5867 29.2267C24.7598 29.24 24.9336 29.24 25.1067 29.2267C26.0899 29.2282 27.0392 28.8675 27.7734 28.2134C28.1935 27.8376 28.5295 27.3773 28.7592 26.8626C28.989 26.3479 29.1074 25.7904 29.1067 25.2267V21.2267C29.0995 20.3055 28.7745 19.4149 28.1866 18.7055C27.5987 17.9962 26.784 17.5115 25.88 17.3334ZM26.5333 25.3334C26.5329 25.5195 26.4935 25.7034 26.4178 25.8733C26.342 26.0432 26.2315 26.1954 26.0934 26.3201C25.9472 26.4532 25.7733 26.5522 25.5842 26.6098C25.3951 26.6675 25.1956 26.6824 25 26.6534C20.0244 26.0036 15.4003 23.7361 11.84 20.2001C8.27665 16.6367 5.98939 11.9966 5.33335 7.00008C5.30438 6.80453 5.31927 6.60498 5.37692 6.41588C5.43457 6.22679 5.53355 6.05288 5.66668 5.90675C5.79284 5.76695 5.94719 5.65546 6.11955 5.57962C6.29191 5.50378 6.47838 5.46531 6.66668 5.46675H10.6667C10.9749 5.45922 11.2762 5.55873 11.5193 5.74835C11.7624 5.93797 11.9323 6.20597 12 6.50675C12 6.86675 12.12 7.24008 12.2 7.60008C12.3541 8.29857 12.5591 8.98484 12.8133 9.65341L10.9467 10.5334C10.6258 10.6807 10.3765 10.9492 10.2534 11.2801C10.12 11.6047 10.12 11.9688 10.2534 12.2934C12.1723 16.4038 15.4763 19.7078 19.5867 21.6267C19.9113 21.7601 20.2754 21.7601 20.6 21.6267C20.9309 21.5036 21.1994 21.2543 21.3467 20.9334L22.1867 19.0667C22.8746 19.3176 23.5783 19.5225 24.2933 19.6801C24.64 19.7601 25.0134 19.8267 25.3734 19.8801C25.6741 19.9478 25.9421 20.1177 26.1318 20.3608C26.3214 20.6039 26.4209 20.9052 26.4134 21.2134L26.5333 25.3334ZM18.6667 2.66675C18.36 2.66675 18.04 2.66675 17.7333 2.66675C17.3797 2.69681 17.0525 2.86611 16.8237 3.13741C16.5949 3.40871 16.4833 3.75979 16.5134 4.11341C16.5434 4.46704 16.7127 4.79423 16.984 5.02303C17.2553 5.25182 17.6064 5.36347 17.96 5.33341H18.6667C20.7884 5.33341 22.8232 6.17627 24.3235 7.67656C25.8238 9.17685 26.6667 11.2117 26.6667 13.3334C26.6667 13.5734 26.6667 13.8001 26.6667 14.0401C26.6371 14.3918 26.7482 14.7409 26.9757 15.0109C27.2031 15.2808 27.5284 15.4496 27.88 15.4801H27.9867C28.3205 15.4814 28.6426 15.3575 28.8895 15.1329C29.1363 14.9082 29.29 14.5992 29.32 14.2667C29.32 13.9601 29.32 13.6401 29.32 13.3334C29.32 10.5067 28.198 7.79566 26.2005 5.79565C24.203 3.79565 21.4933 2.67028 18.6667 2.66675ZM21.3334 13.3334C21.3334 13.687 21.4738 14.0262 21.7239 14.2762C21.9739 14.5263 22.3131 14.6667 22.6667 14.6667C23.0203 14.6667 23.3594 14.5263 23.6095 14.2762C23.8595 14.0262 24 13.687 24 13.3334C24 11.9189 23.4381 10.5624 22.4379 9.56218C21.4377 8.56198 20.0812 8.00008 18.6667 8.00008C18.3131 8.00008 17.9739 8.14056 17.7239 8.39061C17.4738 8.64065 17.3334 8.97979 17.3334 9.33342C17.3334 9.68704 17.4738 10.0262 17.7239 10.2762C17.9739 10.5263 18.3131 10.6667 18.6667 10.6667C19.3739 10.6667 20.0522 10.9477 20.5523 11.4478C21.0524 11.9479 21.3334 12.6262 21.3334 13.3334Z"
        fill={color}
      />
    </svg>
  );
};

export default Tel;
