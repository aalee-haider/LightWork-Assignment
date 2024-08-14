import { ComponentProps } from "react";

export const SidebarHouseIcon = (props: ComponentProps<"svg">) => {
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
                d="M9 22.235v-10h6v10m-12-13l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2v-11z"
                stroke="#374151"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
