import { ComponentProps } from "react";

export const PlayIcon = (props: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="#fff" />
    <path
      fill="#101010"
      d="M14.01 9.83a1.5 1.5 0 0 0-2.26 1.293v9.754a1.5 1.5 0 0 0 2.26 1.293l8.292-4.877a1.5 1.5 0 0 0 0-2.586L14.011 9.83Z"
    />
  </svg>
);
