import * as React from "react"

export const LoopComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#616F82"
                fillRule="evenodd"
                d="m15.264 14.238 2.523 2.523a.725.725 0 1 1-1.026 1.026l-2.523-2.523 1.026-1.026Zm-.953-1.082a6.86 6.86 0 0 0 1.48-4.26A6.904 6.904 0 0 0 8.895 2 6.904 6.904 0 0 0 2 8.896a6.904 6.904 0 0 0 6.895 6.895 6.855 6.855 0 0 0 4.064-1.33l-.001-.001s.53-.435.824-.728c.27-.27.496-.537.529-.576Zm-10.86-4.26a5.45 5.45 0 0 0 5.444 5.443 5.45 5.45 0 0 0 5.444-5.443 5.45 5.45 0 0 0-5.444-5.444 5.45 5.45 0 0 0-5.443 5.444Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M2 2h16v16H2z" />
            </clipPath>
        </defs>
    </svg>
)
