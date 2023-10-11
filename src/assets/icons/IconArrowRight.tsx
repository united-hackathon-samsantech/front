import React from "react";
import type { SVGProps } from "react";

const IconArrowRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.325 21.4249C7.125 21.2416 7.025 21.0122 7.025 20.7369C7.025 20.4622 7.125 20.2249 7.325 20.0249L14.825 12.4999L7.3 4.94991C7.1 4.76657 7 4.53724 7 4.26191C7 3.98724 7.10833 3.74991 7.325 3.54991C7.50833 3.34991 7.73767 3.24991 8.013 3.24991C8.28767 3.24991 8.525 3.34991 8.725 3.54991L17.025 11.8749C17.125 11.9582 17.196 12.0539 17.238 12.1619C17.2793 12.2706 17.3 12.3832 17.3 12.4999C17.3 12.6166 17.2793 12.7289 17.238 12.8369C17.196 12.9456 17.125 13.0416 17.025 13.1249L8.7 21.4499C8.51667 21.6499 8.29167 21.7499 8.025 21.7499C7.75833 21.7499 7.525 21.6416 7.325 21.4249Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconArrowRight;
