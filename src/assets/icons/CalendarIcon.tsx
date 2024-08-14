import { ComponentProps } from "react";

export const CalendarIcon = (props: ComponentProps<"svg">) => {
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
                d="M5.333 1.333V4m5.334-2.667V4M2 6.667h12m-10.667-4h9.334C13.403 2.667 14 3.264 14 4v9.333c0 .737-.597 1.334-1.333 1.334H3.333A1.333 1.333 0 012 13.333V4c0-.736.597-1.333 1.333-1.333z"
                stroke="#1F2937"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
