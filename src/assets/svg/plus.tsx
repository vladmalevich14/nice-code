import * as React from "react"

export const PlusComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="none"
        {...props}
    >
        <path
            fill="#616F82"
            fillRule="evenodd"
            d="M7.998 6.04h5.028a.974.974 0 0 1 0 1.948H7.998v5a1.012 1.012 0 1 1-2.025 0v-5h-5a.974.974 0 1 1 0-1.948h5V1.012a1.012 1.012 0 0 1 2.025 0V6.04Z"
            clipRule="evenodd"
        />
    </svg>
)
