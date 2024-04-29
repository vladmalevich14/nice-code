import * as React from "react"

export const DotsComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={4}
        fill="none"
        {...props}
    >
        <path
            fill="#161718"
            fillRule="evenodd"
            d="M2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
            clipRule="evenodd"
        />
    </svg>
)
