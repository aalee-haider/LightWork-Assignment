import { ComponentProps } from "react";

export const BreadcrumbSlashIcon = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_2003_527)">
                <path
                    d="M12.833 1.167L1.167 12.833"
                    stroke="#71717A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_2003_527">
                    <path fill="#fff" d="M0 0H14V14H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
