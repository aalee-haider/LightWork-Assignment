import { ComponentProps } from "react";

export const SidebarKeyIcon = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M16.5 8.235a.5.5 0 100-1 .5.5 0 000 1z" fill="#374151" />
            <path
                d="M2 18.235v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 10-4-4l-7.4 7.4z"
                stroke="#374151"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.5 8.235a.5.5 0 100-1 .5.5 0 000 1z"
                stroke="#374151"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
