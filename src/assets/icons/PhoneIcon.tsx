import { ComponentProps } from "react";

export const PhoneIcon = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1_4441)">
                <path
                    d="M14.667 11.28v2a1.334 1.334 0 01-1.454 1.333 13.194 13.194 0 01-5.753-2.046 13 13 0 01-4-4 13.193 13.193 0 01-2.047-5.78A1.333 1.333 0 012.74 1.333h2A1.333 1.333 0 016.073 2.48a8.56 8.56 0 00.467 1.873 1.333 1.333 0 01-.3 1.407l-.847.847a10.667 10.667 0 004 4l.847-.847a1.334 1.334 0 011.407-.3 8.56 8.56 0 001.873.467 1.333 1.333 0 011.147 1.353z"
                    stroke="#1F2937"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_4441">
                    <path fill="#fff" d="M0 0H16V16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
