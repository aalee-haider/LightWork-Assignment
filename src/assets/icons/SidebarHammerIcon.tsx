import { ComponentProps } from "react";

export const SidebarHammerIcon = (props: ComponentProps<"svg">) => {
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
                d="M15 12.235l-8.373 8.373a2.121 2.121 0 01-3-3L12 9.235m6 6l4-4m-.5.5l-1.914-1.914A2 2 0 0119 8.407V7.235l-2.26-2.26a6 6 0 00-4.202-1.756L9 3.195l.92.82A6.179 6.179 0 0112 8.635v1.6l2 2h1.172a2 2 0 011.414.586l1.914 1.914"
                stroke="#374151"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
