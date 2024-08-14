import { ComponentProps } from "react";

export const SidebarUserIcon = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M19 21.235v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m11-14a4 4 0 11-8 0 4 4 0 018 0z"
                stroke="#374151"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
