import { ComponentProps } from "react";

export const LeftArrowIcon = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15.25 10H4.75M10 15.25L4.75 10 10 4.75"
                stroke="#666D80"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
