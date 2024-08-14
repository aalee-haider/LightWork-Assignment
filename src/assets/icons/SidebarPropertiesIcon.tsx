import { ComponentProps } from "react";

export const SidebarPropertiesIcon = (props: ComponentProps<"svg">) => {
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
                d="M10 22.235v-6.57m2-4.43h.01m-.01-4h.01m1.99 8.43v6.57m1-6a5 5 0 00-6 0m7-5h.01m-.01-4h.01m-8.01 4h.01m-.01-4h.01m-2.01-5h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2v-16a2 2 0 012-2z"
                stroke="#374151"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
