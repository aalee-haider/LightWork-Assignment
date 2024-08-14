import { ComponentProps } from "react";

export const ClockIcon = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_2003_284)">
                <path
                    d="M8 4v4h3m3.667 0A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0z"
                    stroke="#1F2937"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_2003_284">
                    <path fill="#fff" d="M0 0H16V16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
