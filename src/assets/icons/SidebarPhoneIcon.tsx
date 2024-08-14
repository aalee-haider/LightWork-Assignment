import { ComponentProps } from "react";

export const SidebarPhoneIcon = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_2003_453)">
                <path
                    d="M22 17.155v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67 2 2 0 011.99-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7a2 2 0 011.72 2.03z"
                    stroke="#374151"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <g filter="url(#filter0_d_2003_453)">
                    <path
                        d="M21.616 4.123a.176.176 0 01-.094-.024.158.158 0 01-.06-.083l-.322-.812-.808-.382a.15.15 0 01-.077-.065.215.215 0 01-.022-.102c0-.04.007-.073.022-.101a.15.15 0 01.077-.066l.808-.37.321-.775a.158.158 0 01.061-.084.176.176 0 01.094-.024c.037 0 .069.008.094.024a.157.157 0 01.061.084l.321.775.808.37a.15.15 0 01.078.066.215.215 0 01.022.101c0 .04-.007.074-.022.102a.15.15 0 01-.078.065l-.808.382-.32.812a.157.157 0 01-.062.083.176.176 0 01-.094.024zm0 7.112a.185.185 0 01-.088-.024.148.148 0 01-.067-.083l-.32-.776-.798-.37a.15.15 0 01-.077-.065.214.214 0 01-.022-.102c0-.04.007-.073.022-.101a.15.15 0 01.077-.066l.797-.37.321-.823a.158.158 0 01.061-.084.176.176 0 01.094-.024c.037 0 .069.008.094.024a.157.157 0 01.061.084l.321.823.797.37a.15.15 0 01.078.066.214.214 0 01.022.101c0 .04-.007.074-.022.102a.15.15 0 01-.078.065l-.797.37-.32.776a.148.148 0 01-.067.083.185.185 0 01-.089.024zm-4.86-2.064a.312.312 0 01-.171-.054.346.346 0 01-.127-.149l-.72-1.659-1.55-.752A.376.376 0 0114 6.235a.376.376 0 01.188-.322l1.55-.752.72-1.646a.338.338 0 01.127-.162.312.312 0 01.171-.053c.06 0 .117.018.172.053a.347.347 0 01.127.15l.731 1.658 1.539.752a.327.327 0 01.15.137.376.376 0 010 .37.327.327 0 01-.15.137l-1.539.752-.73 1.659a.305.305 0 01-.128.155.34.34 0 01-.172.048z"
                        fill="#374151"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_d_2003_453"
                    x={-20.125}
                    y={-5.80638}
                    width={77.25}
                    height={78.25}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={27.0833} />
                    <feGaussianBlur stdDeviation={17.0625} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0.262745 0 0 0 0 0.0941176 0 0 0 0 1 0 0 0 0.28 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2003_453" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_2003_453" result="shape" />
                </filter>
                <clipPath id="clip0_2003_453">
                    <path fill="#fff" transform="translate(0 .235)" d="M0 0H24V24H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};