import { ComponentProps } from "react";

export const SidebarLogoutIcon = (props: ComponentProps<"svg">) => {
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
                d="M9 21.235H5a2 2 0 01-2-2v-14a2 2 0 012-2h4m7 14l5-5m0 0l-5-5m5 5H9"
                stroke="#374151"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
