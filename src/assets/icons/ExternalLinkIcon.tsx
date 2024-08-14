import { ComponentProps } from "react";

export const ExternalLinkIcon = (props: ComponentProps<"svg">) => {
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
                d="M10 2h4m0 0v4m0-4L6.667 9.333M12 8.667v4A1.334 1.334 0 0110.667 14H3.333A1.334 1.334 0 012 12.667V5.333A1.333 1.333 0 013.333 4h4"
                stroke="#09090B"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
