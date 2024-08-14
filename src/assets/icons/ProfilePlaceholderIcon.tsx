import { ComponentProps } from "react";

export const ProfilePlaceholderIcon = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={18}
            height={20}
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9 11A5 5 0 109 1a5 5 0 000 10zm0 0a8 8 0 018 8m-8-8a8 8 0 00-8 8"
                stroke="#818898"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
