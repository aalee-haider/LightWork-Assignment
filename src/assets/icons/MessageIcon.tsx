import { ComponentProps } from "react";

export const MessageIcon = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M5.333 6.667h.007m2.66 0h.007m2.66 0h.006M14 10a1.333 1.333 0 01-1.333 1.333h-8L2 14V3.333A1.333 1.333 0 013.333 2h9.334A1.333 1.333 0 0114 3.333V10z"
                stroke="#374151"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
