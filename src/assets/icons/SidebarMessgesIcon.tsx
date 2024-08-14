import { ComponentProps } from "react";

export const SidebarMessgesIcon = (props: ComponentProps<"svg">) => {
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
                d="M8 10.235h.01m3.99 0h.01m3.99 0h.01m4.99 5a2 2 0 01-2 2H7l-4 4v-16a2 2 0 012-2h14a2 2 0 012 2v10z"
                stroke="#374151"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
